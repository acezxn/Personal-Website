import DrawableObject from "./DrawableObject";

export default class Scene extends DrawableObject {
    static objects = [];
    static render(ctx) {
        for (let obj of Scene.objects) {
            obj.render(ctx);
        }
    }
}