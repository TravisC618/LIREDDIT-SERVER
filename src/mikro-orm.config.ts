import { __prod__ } from "./constants";
import { Post } from "./entities/Post";
import { MikroORM } from '@mikro-orm/core';
import path from 'path';
import { User } from "./entities/User";

export default {
    migrations: { 
        path: path.join(__dirname, './migrations'), // path to the folder with migrations
        pattern: /^[\w-]+\d+\.[tj]s$/, // regex pattern for the migration files: handle either js or ts
    },
    entities: [Post, User], // all database tables
    dbName: 'lireddit', // database name
    user: 'postgres',
    password: '33332118',
    type: 'postgresql',
    debug: !__prod__
} as Parameters<typeof MikroORM.init>[0];