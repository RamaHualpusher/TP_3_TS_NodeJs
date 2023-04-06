"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.obtenerCervezas = exports.Cerveza = void 0;
const axios_1 = __importDefault(require("axios"));
class Cerveza {
}
exports.Cerveza = Cerveza;
function obtenerCervezas() {
    return __awaiter(this, void 0, void 0, function* () {
        const url = 'https://random-data-api.com/api/beer/random_beer?size=25';
        try {
            const response = yield axios_1.default.get(url);
            const cervezas = response.data;
            for (const cerveza of cervezas) {
                console.log(`Marca: ${cerveza.brand}, Nombre: ${cerveza.name}, Estilo: ${cerveza.style}, IBU: ${cerveza.ibu}, Alcohol: ${cerveza.alcohol}`);
            }
        }
        catch (error) {
            console.error(`Error al obtener datos: ${error.message}`);
        }
    });
}
exports.obtenerCervezas = obtenerCervezas;
obtenerCervezas();
//# sourceMappingURL=ejercicio8.js.map