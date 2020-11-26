import { helloByVn, helloByThailand } from './mymodule.js'
helloByVn()

import { helloByThailand } from './mymodule.js'
helloByThailand()

import *as hello from './mymodule.js'
hello.helloByThailand()
hello.helloByVn()
import './listenClick.js'