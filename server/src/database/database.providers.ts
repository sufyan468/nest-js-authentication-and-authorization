import { DataSource } from 'typeorm';
import {
  getDatabaseDataSourceOptions,
  typeOrmConfig,
} from '../config/typeorm.config';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async (): Promise<DataSource> => {
      const dataSource = new DataSource({
        ...getDatabaseDataSourceOptions(typeOrmConfig as any),
      });

      return dataSource.initialize();
    },
  },
];
