import { VueEditor, Quill } from "vue2-editor";
import { ImageDrop } from "quill-image-drop-module";
import ImageResize from "quill-image-resize-module";
const Vue2EditorMixin = {
    components:{
        "vue-editor": VueEditor,
    },
    data(){
        return{
            customModulesForEditor: [
                { alias: "imageDrop", module: ImageDrop },
                { alias: "imageResize", module: ImageResize },
            ],
            editorSettings: {
                modules: {
                    imageDrop: true,
                    imageResize: {},
                },
            },
        }
    },
    methods:{
        handleImageAdded: function (file, Editor, cursorLocation, resetUploader) {
            var formData = new FormData();
            formData.append("image", file);
            axios({
                url: "/api/images",
                method: "POST",
                data: formData,
            })
                .then((result) => {
                    let url = result.data.url; // Get url from response
                    Editor.insertEmbed(cursorLocation, "image", url);
                    resetUploader();
                })
                .catch((err) => {
                    console.log(err);
                });
        },

        handleImageRemoved: function (file, Editor, cursorLocation, resetUploader) {
            var formData = new FormData();
            formData.append("image", file);
            axios({
                url: "/api/images/delete",
                method: "POST",
                data: formData,
            })
                .then((result) => {
                    let url = result.data.url; // Get url from response
                    Editor.insertEmbed(cursorLocation, "image", url);
                    resetUploader();
                })
                .catch((err) => {
                    console.log(err);
                });
        },

    }
}

export default Vue2EditorMixin;