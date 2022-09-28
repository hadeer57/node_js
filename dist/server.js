"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const PORT = process.env.PORT || 9876;
app.use(express_1.default.static("client"));
app.use(express_1.default.json());
const indexRoute_1 = __importDefault(require("./routes/indexRoute"));
app.use('/product', indexRoute_1.default);
try {
    app.listen(PORT, () => {
        console.log(`listen on http://localhost:${PORT}`);
    });
}
catch (error) {
    console.log(error);
}
