declare module MongoGlobal {
  declare class Collection<T> {
    constructor(name: string, options?: {
                connection?: Object | null;
                idGeneration?: string;
                transform?: Function;
                }): Collection<T>;
    allow(options: {
      insert?: (userId: string, doc: any) => boolean;
      update?: (userId: string, doc: any, fieldNames: string[], modifier: any) => boolean;
      remove?: (userId: string, doc: any) => boolean;
      fetch?: string[];
      transform?: Function;
    }): boolean;
    deny(options: {
      insert?: (userId: string, doc: any) => boolean;
      update?: (userId: string, doc: any, fieldNames: string[], modifier: any) => boolean;
      remove?: (userId: string, doc: any) => boolean;
      fetch?: string[];
      transform?: Function;
    }): boolean;
    find(selector?: Mongo.Selector, options?: Mongo.FindOptions): Mongo.Cursor<T>;
    findOne(selector?: Mongo.Selector, options?: {
      sort?: Mongo.SortSpecifier;
      skip?: number;
      fields?: Mongo.FieldSpecifier;
      reactive?: boolean;
      transform?: Function;
    }): ?T;
    insert(doc: T, callback?: Function): string;
    remove(selector: Mongo.Selector, callback?: Function): number;
    update(selector: Mongo.Selector, modifier: Modifier<T>, options?: {
      multi?: boolean;
      upsert?: boolean;
    }, callback?: Function): number;
    upsert(selector: Mongo.Selector, modifier: Modifier<T>, options?: {
      multi?: boolean;
    }, callback?: Function): {numberAffected?: number; insertedId?: string;};
    _ensureIndex(indexName: string, options?: {[key: string]: any}): void;

    helpers: Function;
    attachSchema: Function;
    simpleSchema: Function;
  }

  declare class Cursor<T> {
    count(): number;
    fetch(): Array<T>;
    forEach(callback: <T>(doc: T, index: number, cursor: Mongo.Cursor<T>) => void, thisArg?: any): void;
    map(callback: <T>(doc: T, index: number, cursor: Mongo.Cursor<T>) => void, thisArg?: any): Array<T>;
    observe(callbacks: Object): Meteor.LiveQueryHandle;
    observeChanges(callbacks: Object): Meteor.LiveQueryHandle;
  }

  declare class ObjectID {
  }

  declare type Selector = Object

  declare type FindOptions = {
      sort?: Mongo.SortSpecifier;
      skip?: number;
      limit?: number;
      fields?: Mongo.FieldSpecifier;
      reactive?: boolean;
      transform?: Function;
    }
  
  declare type Modifier<T> = $Exact<T> | {
    $set?: $Exact<$Rest<T, {}>>
  }

  declare class SortSpecifier {}
  declare type FieldSpecifier = {
    [id: string]: Number;
  }
  declare class AllowDenyOptions {
    insert?: (userId: string, doc: any) => boolean;
    update?: (userId: string, doc: any, fieldNames: string[], modifier: any) => boolean;
    remove?: (userId: string, doc: any) => boolean;
    fetch?: string[];
    transform?: Function;
  }
}

declare var Mongo: $Exports<'MongoGlobal'>;
