<template>
    <div class="layout">        
        <Layout>
            <Header class="layout-header" :style="{position: 'fixed', width: '100%'}">
                <Menu mode="horizontal" theme="dark" active-name="1">
                    <div class="layout-logo"></div>
                    <div class="layout-nav">
                        <MenuItem name="1">
                            <Icon type="ios-navigate"></Icon>
                            <router-link to="/home">首页</router-link>
                        </MenuItem>
                        <MenuItem name="2">
                            <Icon type="ios-keypad"></Icon>
                            随笔
                        </MenuItem>
                        <MenuItem name="3">
                            <Icon type="ios-keypad"></Icon>
                            分享
                        </MenuItem>
                        <MenuItem name="4">
                            <Icon type="ios-keypad"></Icon>
                            资源
                        </MenuItem>
                        <MenuItem name="5">
                            <Icon type="ios-analytics"></Icon>
                            友链
                        </MenuItem>
                        <MenuItem name="6">
                            <Icon type="ios-paper"></Icon>
                            关于
                        </MenuItem>                        
                        <MenuItem name="6">
                            <Icon type="ios-paper"></Icon>
                            登录/注册
                        </MenuItem>
                    </div>
                </Menu>
            </Header>
            <Content :style="{margin: '88px 20px 0', background: '#fff', minHeight: '500px'}">
                <router-view></router-view>
            </Content>
            <Footer class="layout-footer-center">2011-2016 &copy; TalkingData</Footer>
        </Layout>
    </div>
</template>

<script>
export default {
    name: "home",
};
</script>

<style  lang='less' scoped>
    .layout{
        border-bottom: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
        .layout-header {
            background: @bgColor;
            .layout-logo{
                width: 100px;
                height: 30px;
                background: #5b6270;
                border-radius: 3px;
                float: left;
                position: relative;
                top: 15px;
                left: 20px;
            }
            .layout-nav{
                display: flex;
                width: 420px;
                margin: 0 auto;
                margin-right: 20px;
            }
        }
        .layout-footer-center{
            text-align: center;
        }
    }
</style>