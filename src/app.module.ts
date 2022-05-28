// NOTE
// ルートモジュールに登録された機能のみが
// アプリケーションで使用できる
import { Module } from '@nestjs/common';
import { ItemsModule } from './items/items.module';

@Module({
  imports: [ItemsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
