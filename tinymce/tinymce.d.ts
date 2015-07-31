interface TinyMCEStatic {
    baseURL: string;
    suffix: string;
    init(args: any): void;
    get(id: string): TinyMCEEditor;
    editors: TinyMCEEditor[];
    activeEditor: TinyMCEEditor;
}

interface TinyMCEEditor {
    execCommand(command: string, ui?: boolean, value?: string): boolean;
    setContent(content: string, args?: any): string;
    insertContent(content: string, args?: any): void;
    getContent(args?: any): string;
}

declare var tinymce: TinyMCEStatic;
declare var tinyMCE: TinyMCEStatic;