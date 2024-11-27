import { toast } from "react-toastify";

export const copyToClipboard = (name, text) => {

    const textArea = document.createElement('textarea');
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    try {

        document.execCommand('copy');
        toast.dismiss()
        toast.success(name + ' Copied');
    } catch (err) {
        toast.error('Failed to copy');
    }
    document.body.removeChild(textArea);

};