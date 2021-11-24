import {NestFactory} from "@nestjs/core";
import {AppModule} from "./app.module"
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";

async function start(){
  const PORT = process.env.PORT || 5000;
  const app = await NestFactory.create(AppModule)

  const config = new DocumentBuilder()
      .setTitle('Обучающий проект')
      .setDescription('обучение технологии, получение опыта работы. Осваивание архитектуры проекты')
      .setVersion('1')
      .addTag('learn')
      .build()

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api/docs',app, document);

  await app.listen(PORT, ()=> console.log(`server start ${PORT}`))

}

start()