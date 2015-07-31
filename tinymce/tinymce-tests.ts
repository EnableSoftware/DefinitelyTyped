// Test file for tinyMCE 4.x API Definition file
/// <reference path="tinymce.d.ts" />

/***** SETUP *****/
tinymce.baseURL = App.basePath + "Scripts/tinymce";
tinymce.suffix = ".min";

var config = {
    selector: "#mce-editor",
    plugins: [
        "lists charmap pagebreak directionality template paste media textcolor autoresize link preview"
    ],
    content_css: App.basePath + "Content/tinymce.css",
    theme: "modern",
    toolbar: "undo redo | bold italic underline | styleselect | forecolor fontsizeselect | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link",

    plugin_preview_width: "1184",
    plugin_preview_height: "256",

    statusbar: false,
    menubar: false,
    autoresize_min_height: 122
};

tinymce.init(config);

/***** CONTENT ******/
tinymce.activeEditor.setContent("<p>hello</p>");
tinymce.activeEditor.insertContent("<p>world</p>");
var content = tinymce.activeEditor.getContent();

tinymce.get("#mce-editor").execCommand('mcePreview');

/***** MISC ******/
var editorCount = tinymce.editors.length;
