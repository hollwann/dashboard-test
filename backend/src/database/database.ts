import Knex from "knex";
import knexConfig from "../knexfile";
import dotenv from "dotenv";

dotenv.config();

const environment = process.env.NODE_ENV || "development";
const configOptions = knexConfig[environment];

const knex = Knex(configOptions);

export default knex;
