import DrawableObject from "./drawable_object";

export default class VortexParticle extends DrawableObject {
    #position = {x: 0, y: 0};
    #lifetime = 1000;
    #timeCreated = 0;
    #connections = 0;
    #orbitRadius;
    #maxConnections;
    constructor({position, lifetime} = {}) {
        super();
        if (position) this.#position = position;
        if (lifetime) this.#lifetime = lifetime;
        this.#timeCreated = performance.now();
        this.#orbitRadius = Math.random() * 100;
        this.#maxConnections = Math.ceil(Math.random() * 3);
    }

    getPosition() {
        return this.#position;
    }

    getTimeCreated() {
        return this.#timeCreated;
    }

    getLifetime() {
        return this.#lifetime;
    }

    getConnections() {
        return this.#connections;
    }

    setConnections(connections) {
        this.#connections = connections;
    }

    getMaxConnections() {
        return this.#maxConnections;
    }

    update(rect, mousePosition, deltaTime) {
        let xDiff = mousePosition.x - rect.left - this.#position.x;
        let yDiff = mousePosition.y - rect.top - this.#position.y;
        let distance = Math.sqrt(xDiff ** 2 + yDiff ** 2);
        let xDiffNorm = xDiff / distance;
        let yDiffNorm = yDiff / distance;
        let angle = (Math.PI / 3) / (1 + Math.pow(Math.E, distance - this.#orbitRadius)) + Math.PI / 3;
        let xRotated = Math.cos(angle) * xDiffNorm - Math.sin(angle) * yDiffNorm;
        let yRotated = Math.sin(angle) * xDiffNorm + Math.cos(angle) * yDiffNorm;
        this.#position = {
            x: this.#position.x + xRotated * 500 / Math.sqrt(distance) / deltaTime,
            y: this.#position.y + yRotated * 500 / Math.sqrt(distance) / deltaTime
        }
    }

    render(ctx) {
        if (this.#connections === 0) {
            ctx.fillStyle = "rgba(0, 0, 0, 0)";
        } else {
            ctx.fillStyle = localStorage.getItem("theme") === "light" ? "#680bd9" : "#6ce729"
        }
        ctx.beginPath();
        ctx.arc(this.#position.x, this.#position.y, 3, 0, 2 * Math.PI);
        ctx.fill();
    }
}