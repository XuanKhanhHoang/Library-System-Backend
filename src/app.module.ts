import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { JwtModule } from '@nestjs/jwt';
import { PrismaModule } from './prisma/prisma.module';
import { DocumentModule } from './document/document.module';
import { ShareModule } from './share/share.module';
import { UserModule } from './user/user.module';
import { HandleSimpleDataModule } from './handle-simple-data/handle-simple-data.module';
import { LoanRequestModule } from './loan_request/loan_request.module';
import { LoanReturnTransactionModule } from './loan_return_transaction/loan_return_transaction.module';
import { GoogleDriveModule } from './google_drive/google_drive.module';
import { MailerModule } from '@nestjs-modules/mailer';

@Module({
  imports: [
    PrismaModule,
    JwtModule.register({
      global: true,
      secret: process.env.JWT_ACCESS_TOKEN_SECRET,
      signOptions: { expiresIn: '1h' },
    }),
    MailerModule.forRoot({
      transport: {
        host: process.env.APP_MAIL_HOST,
        port: 587,
        auth: {
          user: process.env.APP_MAIL_USERNAME,
          pass: process.env.APP_MAIL_PWD,
        },
      },
    }),
    AuthModule,
    UserModule,
    DocumentModule,
    HandleSimpleDataModule,
    ShareModule,
    LoanRequestModule,
    LoanReturnTransactionModule,
    GoogleDriveModule,
  ],
})
export class AppModule {}
