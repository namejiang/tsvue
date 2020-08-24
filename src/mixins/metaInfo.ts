import { Component, Vue } from "vue-property-decorator";

@Component
export class MetaInfo extends Vue {
    public title: string = "";
    public meta: Array<object> = [];
    
    metaInfo() {
        return {
            title: this.title,
            meta: this.meta,
        };
    }

    public setMetaInfo(key: string): void {
        this.title = key;
        this.meta = [
            {
                name: "viewport",
                content: "width=device-width, user-scalable=yes",
            },
            {
                name: "keywords",
                content: "keywordskeywordskeywords",
            },
            {
                name: "description",
                content: "description",
            },
        ];
    }
}