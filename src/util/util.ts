const Moment = (time: string, format: string) => {
    if (time) {
        const date = new Date(new Date(time).getTime() + 8 * 60 * 60 * 1000);
        const t = date.toJSON().substr(0, 19).replace("T", " ");
        const l = t.split(" ");
        if (format) {
            return format.replace("YYYY", l[0].split("-")[0])
                .replace("MM", l[0].split("-")[1])
                .replace("DD", l[0].split("-")[2])
                .replace("hh", l[1].split(":")[0])
                .replace("mm", l[1].split(":")[1])
                .replace("ss", l[1].split(":")[2]);
        } else {
            return t;
        }
    } else {
        return "";
    }
};

export default { Moment };
