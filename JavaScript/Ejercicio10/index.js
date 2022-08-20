import chalk from 'chalk';

import * as moduloController from './modulos/controller.js'

const sum = moduloController.suma(4, 8);
console.log(sum)

const multi = moduloController.multiplica(4, 8);
console.log(chalk.green(multi));