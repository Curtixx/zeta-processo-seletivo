"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default1676851177846 = void 0;
class default1676851177846 {
    constructor() {
        this.name = 'default1676851177846';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE \`users\` (\`id\` int NOT NULL AUTO_INCREMENT, \`nome\` text NOT NULL, \`sobrenome\` text NOT NULL, \`idade\` int NOT NULL, PRIMARY KEY (\`id\`), \`email\` text NOT NULL, \`senha\` text NOT NULL) ENGINE=InnoDB`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE \`users\``);
    }
}
exports.default1676851177846 = default1676851177846;
