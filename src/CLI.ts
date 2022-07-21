// main
import CLIManager from "./infra/cli/CLIManager";
import StdinAdapter from "./infra/cli/StdinAdapter";
import StdoutAdapter from "./infra/cli/StdoutAdapter";
import CLIController from "./infra/controller/cli/CLIController";
import PgPromiseAdpter from "./infra/database/PgPromiseAdapter";

// Frameworks and Drives
const inputDevice = new StdinAdapter();
const outputDevice = new StdoutAdapter();
const connection = new PgPromiseAdpter();

// Interface Adapters
const cliManager = new CLIManager(inputDevice, outputDevice);
new CLIController(cliManager, connection);