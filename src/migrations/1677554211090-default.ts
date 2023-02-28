import { MigrationInterface, QueryRunner } from "typeorm";

export class default1676851177846 implements MigrationInterface {
    name = 'default1676851177846'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`users\` (\`id\` int NOT NULL AUTO_INCREMENT, \`nome\` text NOT NULL, \`sobrenome\` text NOT NULL, \`idade\` int NOT NULL, PRIMARY KEY (\`id\`), \`email\` text NOT NULL, \`senha\` text NOT NULL) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`users\``);
    }

}
