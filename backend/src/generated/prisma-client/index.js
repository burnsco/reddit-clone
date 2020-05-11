"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "Category",
    embedded: false
  },
  {
    name: "Post",
    embedded: false
  },
  {
    name: "Comment",
    embedded: false
  },
  {
    name: "User",
    embedded: false
  },
  {
    name: "Vote",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `https://salty-tor-15652.herokuapp.com/reddit-clone-db/dev`,
  secret: `rFbvSJJpt1GgpZmgX9Ty5zPkU7FVn3YO0M9njDvevTU1UcQdrzajbcO8RRkKgv3`
});
exports.prisma = new exports.Prisma();
