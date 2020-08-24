import Vue from "vue";
import router from "../router";

interface Config {
    path: string;
    method: string;
    params: { [key: string]: string };
    data: object;
    okText: string;
    noText: string;
    okFunc: (msg: any) => void;
    noFunc: (msg: any) => void;
    finallyFunc: () => void;
}


interface Message {
    message: string;
    error: string;
}

/**
 * 默认提示信息
 * message: 业务错误信息
 * error: 异常错误信息
 */
const msg: Message = {
    message: "操作失败！",
    error: "内部错误，请联系管理员！",
};

/**
 * @author nameJiang
 * @desc 基础工具，需要自行传参
 * @param config.path 请求路径（http开头时不拼接HOST）
 * @param config.method 请求方法
 * @param config.params GET参数（当请求方式是POST时，params会被转成FormData对象）
 * @param config.data POST、PUT、DELETE参数
 * @param config.okText 成功提示内容
 * @param config.noText 失败提示内容
 * @param config.okFunc 成功回调
 * @param config.noFunc 失败回调
 * @param config.finallyFunc 最后回调
 */
const Request = (config: Config) => {
    let path: string = config.path;
    if (path.indexOf("http") !== 0) {
        path = Vue.prototype.HOST + config.path;
    }
    let formData: any;
    if (config.params) {
        formData = new FormData();
        Object.keys(config.params).forEach((value) => {
            formData.append(value, config.params[value]);
        });
    }
    const token = Vue.prototype.$Auth.token();
    const params: object = config.method === "GET" ? { token, ...config.params } : { token };
    Vue.prototype.$axios(path, {
        method: config.method,
        params,
        data: config.data || formData,
    }).then((response: any) => {
        if (response.data.code === 200) {
            if (config.okText) {
                Vue.prototype.$message.success(config.okText);
            }
            if (config.okFunc) {
                config.okFunc(response.data);
            }
        } else if (response.data.code === 700) {
            router.push("/").catch((err) => err);
        } else {
            if (config.noText) {
                Vue.prototype.$message.error(config.noText);
            } else if (response.data.message) {
                Vue.prototype.$message.error(response.data.message);
            }
            if (config.noFunc) {
                const res: Message = response && response.data ? response.data : { message: msg.message };
                config.noFunc(res);
            }
        }
    }).catch((reason: any) => {
        window.console.error(reason); // 看一下错误信息
        if (config.noText) {
            Vue.prototype.$message.error(config.noText);
        } else {
            Vue.prototype.$message.error(msg.error);
        }
        if (config.noFunc) {
            const err: Message = { message: msg.message, error: "" };
            config.noFunc(err);
        }
    }).finally(() => {
        if (config.finallyFunc) {
            config.finallyFunc();
        }
    });
};

/**
 * @author nameJiang
 * @desc GET请求
 */
const Get = (config: Config) => {
    config.method = "GET";
    Request(config);
};

/**
 * @author nameJiang
 * @desc POST请求
 */
const Post = (config: Config) => {
    config.method = "POST";
    Request(config);
};

/**
 * @author nameJiang
 * @desc PUT请求
 */
const Put = (config: Config) => {
    config.method = "PUT";
    Request(config);
};

/**
 * @author nameJiang
 * @desc DELETE请求
 */
const Delete = (config: Config) => {
    config.method = "DELETE";
    Request(config);
};

export default { Get, Post, Put, Delete };
