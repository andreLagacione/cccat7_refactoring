import CLIManager from "../../src/infra/cli/CLIManager";
import CLIController from "../../src/infra/controller/cli/CLIController";
import PgPromiseAdpter from "../../src/infra/database/PgPromiseAdapter";

test('Deve testar o CLI',async () => {
    const inputDevice = { onData: () => {} };
    const outputDevice = { write: () => {} };
    const connection = new PgPromiseAdpter();
    const cliManager = new CLIManager(inputDevice, outputDevice);
    new CLIController(cliManager, connection);
    await cliManager.execute('cpf 886.634.854-68');
    await cliManager.execute('add-item 1 1');
    const output = await cliManager.execute('preview');
    expect(output).toBe('total: 1030');
    await connection.close();
});
