import { proxy } from "valtio";

export const appSettings = proxy({
    selectedImage: 0,
});
