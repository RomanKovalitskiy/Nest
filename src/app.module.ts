import {Module} from "@nestjs/common";
import { UsersModule } from './users/users.module';
import {SequelizeModule} from  '@nestjs/sequelize'
import {ConfigModule} from "@nestjs/config";
import {User} from "./users/users.model";
import { RolesModule } from './roles/roles.module';
import {Role} from "./roles/roles.model";
import {UserRoles} from "./roles/user-roles.model";
import { AuthModule } from './auth/auth.module';
import { PostsModule } from './posts/posts.module';
import {Post} from "./posts/posts.model";
import { FilesModule } from './files/files.module';
import {ServeStaticModule} from "@nestjs/serve-static";
import * as path from 'path';
@Module({
    controllers:[
    ],
    providers:[
    ],
    imports: [
        ConfigModule.forRoot(
            {envFilePath: `.${process.env.NODE_ENV}.env`}
        ),
        SequelizeModule.forRoot({
            dialect: 'postgres',
            host: process.env.POSTRGRES_HOST,
            port: Number(process.env.POSTRGRES_PORT),
            username: process.env.POSTGRES_USER,
            password: process.env.POSTGRES_PASSWORD,
            database: process.env.POSTGRES_DB,
            models: [User, Role, UserRoles, Post],
            autoLoadModels: true
        }),
        ServeStaticModule.forRoot({
           rootPath: path.resolve(__dirname, 'static')
        }),
        UsersModule,
        RolesModule,
        AuthModule,
        PostsModule,
        FilesModule,
    ],
})
export class AppModule {}
