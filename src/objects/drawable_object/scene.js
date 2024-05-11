import DrawableObject from "./drawable_object";
import VortexParticle from "./vortex_particle";

export default class Scene extends DrawableObject {
    static objects = [];
    static mousePosition = { x: 0, y: 0 };
    static lastUpdate = performance.now();
    static connectDistance = 150;
    static fadeDistance = 80;
    static spawnVortexParticle(ctx) {
        this.objects.push(new VortexParticle(
            {
                position: {
                    x: Math.random() * ctx.canvas.width,
                    y: Math.random() * ctx.canvas.height
                },
                lifetime: Math.random() * 8000
            }
        ));
    }
    static update(ctx) {
        const rect = ctx.canvas.getBoundingClientRect();
        for (let index = 0; index < Scene.objects.length; index++) {
            let obj = Scene.objects[index];
            if (obj instanceof VortexParticle) {
                if (performance.now() - obj.getTimeCreated() > obj.getLifetime()) {
                    Scene.objects.splice(index, 1);
                } else {
                    obj.update(rect, this.mousePosition, performance.now() - this.lastUpdate);
                }
            }
        }
        this.lastUpdate = performance.now();
    }
    static render(ctx) {
        Scene.update(ctx);
        console.log(Scene.objects.length);
        for (let obj of Scene.objects) {
            for (let otherObj of Scene.objects) {
                if (obj === otherObj) {
                    continue;
                }
                if (obj.getConnections() > obj.getMaxConnections() ||
                    otherObj.getConnections() > otherObj.getMaxConnections()) {
                    continue;
                }
                let xDiff = obj.getPosition().x - otherObj.getPosition().x;
                let yDiff = obj.getPosition().y - otherObj.getPosition().y;
                let distance = Math.sqrt(xDiff ** 2 + yDiff ** 2);
                if (distance < Scene.connectDistance) {
                    if (localStorage.getItem("theme") === "dark") {
                        if (distance > Scene.connectDistance - Scene.fadeDistance) {
                            ctx.strokeStyle = `rgba(108, 231, 41, ${(distance - Scene.connectDistance + Scene.fadeDistance) / Scene.fadeDistance})`
                        } else {
                            ctx.strokeStyle = "rgba(108, 231, 41, 1)"
                        }
                    } else {
                        if (distance > Scene.connectDistance - Scene.fadeDistance) {
                            ctx.strokeStyle = `rgba(104, 11, 217, ${(distance - Scene.connectDistance + Scene.fadeDistance) / Scene.fadeDistance})`
                        } else {
                            ctx.strokeStyle = "rgba(104, 11, 217, 1)"
                        }
                    }
                    ctx.lineWidth = 2;
                    ctx.beginPath();
                    ctx.moveTo(obj.getPosition().x, obj.getPosition().y);
                    ctx.lineTo(otherObj.getPosition().x, otherObj.getPosition().y);
                    ctx.stroke();
                    obj.setConnections(obj.getConnections() + 1);
                    otherObj.setConnections(otherObj.getConnections() + 1);
                }
            }
        }
        for (let obj of Scene.objects) {
            obj.render(ctx);
            obj.setConnections(0);
        }
    }
}