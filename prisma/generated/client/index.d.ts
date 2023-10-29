
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Token
 * 
 */
export type Token = $Result.DefaultSelection<Prisma.$TokenPayload>
/**
 * Model Group
 * 
 */
export type Group = $Result.DefaultSelection<Prisma.$GroupPayload>
/**
 * Model Day
 * 
 */
export type Day = $Result.DefaultSelection<Prisma.$DayPayload>
/**
 * Model UserInDay
 * 
 */
export type UserInDay = $Result.DefaultSelection<Prisma.$UserInDayPayload>
/**
 * Model WorkPlace
 * 
 */
export type WorkPlace = $Result.DefaultSelection<Prisma.$WorkPlacePayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.token`: Exposes CRUD operations for the **Token** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tokens
    * const tokens = await prisma.token.findMany()
    * ```
    */
  get token(): Prisma.TokenDelegate<ExtArgs>;

  /**
   * `prisma.group`: Exposes CRUD operations for the **Group** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Groups
    * const groups = await prisma.group.findMany()
    * ```
    */
  get group(): Prisma.GroupDelegate<ExtArgs>;

  /**
   * `prisma.day`: Exposes CRUD operations for the **Day** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Days
    * const days = await prisma.day.findMany()
    * ```
    */
  get day(): Prisma.DayDelegate<ExtArgs>;

  /**
   * `prisma.userInDay`: Exposes CRUD operations for the **UserInDay** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserInDays
    * const userInDays = await prisma.userInDay.findMany()
    * ```
    */
  get userInDay(): Prisma.UserInDayDelegate<ExtArgs>;

  /**
   * `prisma.workPlace`: Exposes CRUD operations for the **WorkPlace** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WorkPlaces
    * const workPlaces = await prisma.workPlace.findMany()
    * ```
    */
  get workPlace(): Prisma.WorkPlaceDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.3.1
   * Query Engine version: 61e140623197a131c2a6189271ffee05a7aa9a59
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Token: 'Token',
    Group: 'Group',
    Day: 'Day',
    UserInDay: 'UserInDay',
    WorkPlace: 'WorkPlace'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.Args}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'user' | 'token' | 'group' | 'day' | 'userInDay' | 'workPlace'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Token: {
        payload: Prisma.$TokenPayload<ExtArgs>
        fields: Prisma.TokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TokenFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TokenFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          findFirst: {
            args: Prisma.TokenFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TokenFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          findMany: {
            args: Prisma.TokenFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>[]
          }
          create: {
            args: Prisma.TokenCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          createMany: {
            args: Prisma.TokenCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.TokenDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          update: {
            args: Prisma.TokenUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          deleteMany: {
            args: Prisma.TokenDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.TokenUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.TokenUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          aggregate: {
            args: Prisma.TokenAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateToken>
          }
          groupBy: {
            args: Prisma.TokenGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.TokenCountArgs<ExtArgs>,
            result: $Utils.Optional<TokenCountAggregateOutputType> | number
          }
        }
      }
      Group: {
        payload: Prisma.$GroupPayload<ExtArgs>
        fields: Prisma.GroupFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GroupFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GroupPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GroupFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          findFirst: {
            args: Prisma.GroupFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GroupPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GroupFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          findMany: {
            args: Prisma.GroupFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>[]
          }
          create: {
            args: Prisma.GroupCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          createMany: {
            args: Prisma.GroupCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.GroupDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          update: {
            args: Prisma.GroupUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          deleteMany: {
            args: Prisma.GroupDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.GroupUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.GroupUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          aggregate: {
            args: Prisma.GroupAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateGroup>
          }
          groupBy: {
            args: Prisma.GroupGroupByArgs<ExtArgs>,
            result: $Utils.Optional<GroupGroupByOutputType>[]
          }
          count: {
            args: Prisma.GroupCountArgs<ExtArgs>,
            result: $Utils.Optional<GroupCountAggregateOutputType> | number
          }
        }
      }
      Day: {
        payload: Prisma.$DayPayload<ExtArgs>
        fields: Prisma.DayFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DayFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DayPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DayFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DayPayload>
          }
          findFirst: {
            args: Prisma.DayFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DayPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DayFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DayPayload>
          }
          findMany: {
            args: Prisma.DayFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DayPayload>[]
          }
          create: {
            args: Prisma.DayCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DayPayload>
          }
          createMany: {
            args: Prisma.DayCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.DayDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DayPayload>
          }
          update: {
            args: Prisma.DayUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DayPayload>
          }
          deleteMany: {
            args: Prisma.DayDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.DayUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.DayUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DayPayload>
          }
          aggregate: {
            args: Prisma.DayAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateDay>
          }
          groupBy: {
            args: Prisma.DayGroupByArgs<ExtArgs>,
            result: $Utils.Optional<DayGroupByOutputType>[]
          }
          count: {
            args: Prisma.DayCountArgs<ExtArgs>,
            result: $Utils.Optional<DayCountAggregateOutputType> | number
          }
        }
      }
      UserInDay: {
        payload: Prisma.$UserInDayPayload<ExtArgs>
        fields: Prisma.UserInDayFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserInDayFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserInDayPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserInDayFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserInDayPayload>
          }
          findFirst: {
            args: Prisma.UserInDayFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserInDayPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserInDayFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserInDayPayload>
          }
          findMany: {
            args: Prisma.UserInDayFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserInDayPayload>[]
          }
          create: {
            args: Prisma.UserInDayCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserInDayPayload>
          }
          createMany: {
            args: Prisma.UserInDayCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserInDayDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserInDayPayload>
          }
          update: {
            args: Prisma.UserInDayUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserInDayPayload>
          }
          deleteMany: {
            args: Prisma.UserInDayDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserInDayUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserInDayUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserInDayPayload>
          }
          aggregate: {
            args: Prisma.UserInDayAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUserInDay>
          }
          groupBy: {
            args: Prisma.UserInDayGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserInDayGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserInDayCountArgs<ExtArgs>,
            result: $Utils.Optional<UserInDayCountAggregateOutputType> | number
          }
        }
      }
      WorkPlace: {
        payload: Prisma.$WorkPlacePayload<ExtArgs>
        fields: Prisma.WorkPlaceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkPlaceFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WorkPlacePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkPlaceFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WorkPlacePayload>
          }
          findFirst: {
            args: Prisma.WorkPlaceFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WorkPlacePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkPlaceFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WorkPlacePayload>
          }
          findMany: {
            args: Prisma.WorkPlaceFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WorkPlacePayload>[]
          }
          create: {
            args: Prisma.WorkPlaceCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WorkPlacePayload>
          }
          createMany: {
            args: Prisma.WorkPlaceCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.WorkPlaceDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WorkPlacePayload>
          }
          update: {
            args: Prisma.WorkPlaceUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WorkPlacePayload>
          }
          deleteMany: {
            args: Prisma.WorkPlaceDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.WorkPlaceUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.WorkPlaceUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WorkPlacePayload>
          }
          aggregate: {
            args: Prisma.WorkPlaceAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateWorkPlace>
          }
          groupBy: {
            args: Prisma.WorkPlaceGroupByArgs<ExtArgs>,
            result: $Utils.Optional<WorkPlaceGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkPlaceCountArgs<ExtArgs>,
            result: $Utils.Optional<WorkPlaceCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    tokens: number
    userInDay: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    tokens?: boolean | UserCountOutputTypeCountTokensArgs
    userInDay?: boolean | UserCountOutputTypeCountUserInDayArgs
  }

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTokensArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: TokenWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserInDayArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: UserInDayWhereInput
  }



  /**
   * Count Type GroupCountOutputType
   */

  export type GroupCountOutputType = {
    users: number
    days: number
  }

  export type GroupCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    users?: boolean | GroupCountOutputTypeCountUsersArgs
    days?: boolean | GroupCountOutputTypeCountDaysArgs
  }

  // Custom InputTypes

  /**
   * GroupCountOutputType without action
   */
  export type GroupCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupCountOutputType
     */
    select?: GroupCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * GroupCountOutputType without action
   */
  export type GroupCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * GroupCountOutputType without action
   */
  export type GroupCountOutputTypeCountDaysArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: DayWhereInput
  }



  /**
   * Count Type DayCountOutputType
   */

  export type DayCountOutputType = {
    usersInDay: number
  }

  export type DayCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    usersInDay?: boolean | DayCountOutputTypeCountUsersInDayArgs
  }

  // Custom InputTypes

  /**
   * DayCountOutputType without action
   */
  export type DayCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DayCountOutputType
     */
    select?: DayCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * DayCountOutputType without action
   */
  export type DayCountOutputTypeCountUsersInDayArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: UserInDayWhereInput
  }



  /**
   * Count Type WorkPlaceCountOutputType
   */

  export type WorkPlaceCountOutputType = {
    users: number
    groups: number
  }

  export type WorkPlaceCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    users?: boolean | WorkPlaceCountOutputTypeCountUsersArgs
    groups?: boolean | WorkPlaceCountOutputTypeCountGroupsArgs
  }

  // Custom InputTypes

  /**
   * WorkPlaceCountOutputType without action
   */
  export type WorkPlaceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkPlaceCountOutputType
     */
    select?: WorkPlaceCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * WorkPlaceCountOutputType without action
   */
  export type WorkPlaceCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * WorkPlaceCountOutputType without action
   */
  export type WorkPlaceCountOutputTypeCountGroupsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: GroupWhereInput
  }



  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    phoneNumber: number | null
    workPlaceId: number | null
    groupId: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    phoneNumber: number | null
    workPlaceId: number | null
    groupId: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    name: string | null
    userName: string | null
    phoneNumber: number | null
    workPlaceId: number | null
    groupId: number | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    name: string | null
    userName: string | null
    phoneNumber: number | null
    workPlaceId: number | null
    groupId: number | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    userName: number
    phoneNumber: number
    workPlaceId: number
    groupId: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    phoneNumber?: true
    workPlaceId?: true
    groupId?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    phoneNumber?: true
    workPlaceId?: true
    groupId?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    userName?: true
    phoneNumber?: true
    workPlaceId?: true
    groupId?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    userName?: true
    phoneNumber?: true
    workPlaceId?: true
    groupId?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    userName?: true
    phoneNumber?: true
    workPlaceId?: true
    groupId?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string | null
    name: string | null
    userName: string | null
    phoneNumber: number | null
    workPlaceId: number | null
    groupId: number | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    userName?: boolean
    phoneNumber?: boolean
    workPlaceId?: boolean
    groupId?: boolean
    workPlace?: boolean | User$workPlaceArgs<ExtArgs>
    group?: boolean | User$groupArgs<ExtArgs>
    tokens?: boolean | User$tokensArgs<ExtArgs>
    userInDay?: boolean | User$userInDayArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    userName?: boolean
    phoneNumber?: boolean
    workPlaceId?: boolean
    groupId?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    workPlace?: boolean | User$workPlaceArgs<ExtArgs>
    group?: boolean | User$groupArgs<ExtArgs>
    tokens?: boolean | User$tokensArgs<ExtArgs>
    userInDay?: boolean | User$userInDayArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UserPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      workPlace: Prisma.$WorkPlacePayload<ExtArgs> | null
      group: Prisma.$GroupPayload<ExtArgs> | null
      tokens: Prisma.$TokenPayload<ExtArgs>[]
      userInDay: Prisma.$UserInDayPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetResult<{
      id: number
      email: string | null
      name: string | null
      userName: string | null
      phoneNumber: number | null
      workPlaceId: number | null
      groupId: number | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    workPlace<T extends User$workPlaceArgs<ExtArgs> = {}>(args?: Subset<T, User$workPlaceArgs<ExtArgs>>): Prisma__WorkPlaceClient<$Result.GetResult<Prisma.$WorkPlacePayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    group<T extends User$groupArgs<ExtArgs> = {}>(args?: Subset<T, User$groupArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    tokens<T extends User$tokensArgs<ExtArgs> = {}>(args?: Subset<T, User$tokensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, 'findMany'> | Null>;

    userInDay<T extends User$userInDayArgs<ExtArgs> = {}>(args?: Subset<T, User$userInDayArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserInDayPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly userName: FieldRef<"User", 'String'>
    readonly phoneNumber: FieldRef<"User", 'Int'>
    readonly workPlaceId: FieldRef<"User", 'Int'>
    readonly groupId: FieldRef<"User", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data?: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User.workPlace
   */
  export type User$workPlaceArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkPlace
     */
    select?: WorkPlaceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorkPlaceInclude<ExtArgs> | null
    where?: WorkPlaceWhereInput
  }


  /**
   * User.group
   */
  export type User$groupArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupInclude<ExtArgs> | null
    where?: GroupWhereInput
  }


  /**
   * User.tokens
   */
  export type User$tokensArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TokenInclude<ExtArgs> | null
    where?: TokenWhereInput
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    cursor?: TokenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TokenScalarFieldEnum | TokenScalarFieldEnum[]
  }


  /**
   * User.userInDay
   */
  export type User$userInDayArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInDay
     */
    select?: UserInDaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInDayInclude<ExtArgs> | null
    where?: UserInDayWhereInput
    orderBy?: UserInDayOrderByWithRelationInput | UserInDayOrderByWithRelationInput[]
    cursor?: UserInDayWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserInDayScalarFieldEnum | UserInDayScalarFieldEnum[]
  }


  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
  }



  /**
   * Model Token
   */

  export type AggregateToken = {
    _count: TokenCountAggregateOutputType | null
    _avg: TokenAvgAggregateOutputType | null
    _sum: TokenSumAggregateOutputType | null
    _min: TokenMinAggregateOutputType | null
    _max: TokenMaxAggregateOutputType | null
  }

  export type TokenAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type TokenSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type TokenMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updateAt: Date | null
    type: string | null
    emailToken: string | null
    valid: boolean | null
    expiration: Date | null
    userId: number | null
  }

  export type TokenMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updateAt: Date | null
    type: string | null
    emailToken: string | null
    valid: boolean | null
    expiration: Date | null
    userId: number | null
  }

  export type TokenCountAggregateOutputType = {
    id: number
    createdAt: number
    updateAt: number
    type: number
    emailToken: number
    valid: number
    expiration: number
    userId: number
    _all: number
  }


  export type TokenAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type TokenSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type TokenMinAggregateInputType = {
    id?: true
    createdAt?: true
    updateAt?: true
    type?: true
    emailToken?: true
    valid?: true
    expiration?: true
    userId?: true
  }

  export type TokenMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updateAt?: true
    type?: true
    emailToken?: true
    valid?: true
    expiration?: true
    userId?: true
  }

  export type TokenCountAggregateInputType = {
    id?: true
    createdAt?: true
    updateAt?: true
    type?: true
    emailToken?: true
    valid?: true
    expiration?: true
    userId?: true
    _all?: true
  }

  export type TokenAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Token to aggregate.
     */
    where?: TokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tokens
    **/
    _count?: true | TokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TokenAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TokenSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TokenMaxAggregateInputType
  }

  export type GetTokenAggregateType<T extends TokenAggregateArgs> = {
        [P in keyof T & keyof AggregateToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateToken[P]>
      : GetScalarType<T[P], AggregateToken[P]>
  }




  export type TokenGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: TokenWhereInput
    orderBy?: TokenOrderByWithAggregationInput | TokenOrderByWithAggregationInput[]
    by: TokenScalarFieldEnum[] | TokenScalarFieldEnum
    having?: TokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TokenCountAggregateInputType | true
    _avg?: TokenAvgAggregateInputType
    _sum?: TokenSumAggregateInputType
    _min?: TokenMinAggregateInputType
    _max?: TokenMaxAggregateInputType
  }

  export type TokenGroupByOutputType = {
    id: number
    createdAt: Date
    updateAt: Date
    type: string
    emailToken: string | null
    valid: boolean
    expiration: Date
    userId: number
    _count: TokenCountAggregateOutputType | null
    _avg: TokenAvgAggregateOutputType | null
    _sum: TokenSumAggregateOutputType | null
    _min: TokenMinAggregateOutputType | null
    _max: TokenMaxAggregateOutputType | null
  }

  type GetTokenGroupByPayload<T extends TokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TokenGroupByOutputType[P]>
            : GetScalarType<T[P], TokenGroupByOutputType[P]>
        }
      >
    >


  export type TokenSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updateAt?: boolean
    type?: boolean
    emailToken?: boolean
    valid?: boolean
    expiration?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["token"]>

  export type TokenSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updateAt?: boolean
    type?: boolean
    emailToken?: boolean
    valid?: boolean
    expiration?: boolean
    userId?: boolean
  }

  export type TokenInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $TokenPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Token"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetResult<{
      id: number
      createdAt: Date
      updateAt: Date
      type: string
      emailToken: string | null
      valid: boolean
      expiration: Date
      userId: number
    }, ExtArgs["result"]["token"]>
    composites: {}
  }


  type TokenGetPayload<S extends boolean | null | undefined | TokenDefaultArgs> = $Result.GetResult<Prisma.$TokenPayload, S>

  type TokenCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<TokenFindManyArgs, 'select' | 'include'> & {
      select?: TokenCountAggregateInputType | true
    }

  export interface TokenDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Token'], meta: { name: 'Token' } }
    /**
     * Find zero or one Token that matches the filter.
     * @param {TokenFindUniqueArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TokenFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, TokenFindUniqueArgs<ExtArgs>>
    ): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Token that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TokenFindUniqueOrThrowArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TokenFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TokenFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Token that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenFindFirstArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TokenFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, TokenFindFirstArgs<ExtArgs>>
    ): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Token that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenFindFirstOrThrowArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TokenFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TokenFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Tokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tokens
     * const tokens = await prisma.token.findMany()
     * 
     * // Get first 10 Tokens
     * const tokens = await prisma.token.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tokenWithIdOnly = await prisma.token.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TokenFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TokenFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Token.
     * @param {TokenCreateArgs} args - Arguments to create a Token.
     * @example
     * // Create one Token
     * const Token = await prisma.token.create({
     *   data: {
     *     // ... data to create a Token
     *   }
     * })
     * 
    **/
    create<T extends TokenCreateArgs<ExtArgs>>(
      args: SelectSubset<T, TokenCreateArgs<ExtArgs>>
    ): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Tokens.
     *     @param {TokenCreateManyArgs} args - Arguments to create many Tokens.
     *     @example
     *     // Create many Tokens
     *     const token = await prisma.token.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TokenCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TokenCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Token.
     * @param {TokenDeleteArgs} args - Arguments to delete one Token.
     * @example
     * // Delete one Token
     * const Token = await prisma.token.delete({
     *   where: {
     *     // ... filter to delete one Token
     *   }
     * })
     * 
    **/
    delete<T extends TokenDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, TokenDeleteArgs<ExtArgs>>
    ): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Token.
     * @param {TokenUpdateArgs} args - Arguments to update one Token.
     * @example
     * // Update one Token
     * const token = await prisma.token.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TokenUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, TokenUpdateArgs<ExtArgs>>
    ): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Tokens.
     * @param {TokenDeleteManyArgs} args - Arguments to filter Tokens to delete.
     * @example
     * // Delete a few Tokens
     * const { count } = await prisma.token.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TokenDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TokenDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tokens
     * const token = await prisma.token.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TokenUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, TokenUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Token.
     * @param {TokenUpsertArgs} args - Arguments to update or create a Token.
     * @example
     * // Update or create a Token
     * const token = await prisma.token.upsert({
     *   create: {
     *     // ... data to create a Token
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Token we want to update
     *   }
     * })
    **/
    upsert<T extends TokenUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, TokenUpsertArgs<ExtArgs>>
    ): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenCountArgs} args - Arguments to filter Tokens to count.
     * @example
     * // Count the number of Tokens
     * const count = await prisma.token.count({
     *   where: {
     *     // ... the filter for the Tokens we want to count
     *   }
     * })
    **/
    count<T extends TokenCountArgs>(
      args?: Subset<T, TokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Token.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TokenAggregateArgs>(args: Subset<T, TokenAggregateArgs>): Prisma.PrismaPromise<GetTokenAggregateType<T>>

    /**
     * Group by Token.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TokenGroupByArgs['orderBy'] }
        : { orderBy?: TokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Token model
   */
  readonly fields: TokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Token.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TokenClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Token model
   */ 
  interface TokenFieldRefs {
    readonly id: FieldRef<"Token", 'Int'>
    readonly createdAt: FieldRef<"Token", 'DateTime'>
    readonly updateAt: FieldRef<"Token", 'DateTime'>
    readonly type: FieldRef<"Token", 'String'>
    readonly emailToken: FieldRef<"Token", 'String'>
    readonly valid: FieldRef<"Token", 'Boolean'>
    readonly expiration: FieldRef<"Token", 'DateTime'>
    readonly userId: FieldRef<"Token", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Token findUnique
   */
  export type TokenFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter, which Token to fetch.
     */
    where: TokenWhereUniqueInput
  }


  /**
   * Token findUniqueOrThrow
   */
  export type TokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter, which Token to fetch.
     */
    where: TokenWhereUniqueInput
  }


  /**
   * Token findFirst
   */
  export type TokenFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter, which Token to fetch.
     */
    where?: TokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tokens.
     */
    cursor?: TokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tokens.
     */
    distinct?: TokenScalarFieldEnum | TokenScalarFieldEnum[]
  }


  /**
   * Token findFirstOrThrow
   */
  export type TokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter, which Token to fetch.
     */
    where?: TokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tokens.
     */
    cursor?: TokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tokens.
     */
    distinct?: TokenScalarFieldEnum | TokenScalarFieldEnum[]
  }


  /**
   * Token findMany
   */
  export type TokenFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter, which Tokens to fetch.
     */
    where?: TokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tokens.
     */
    cursor?: TokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    distinct?: TokenScalarFieldEnum | TokenScalarFieldEnum[]
  }


  /**
   * Token create
   */
  export type TokenCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * The data needed to create a Token.
     */
    data: XOR<TokenCreateInput, TokenUncheckedCreateInput>
  }


  /**
   * Token createMany
   */
  export type TokenCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tokens.
     */
    data: TokenCreateManyInput | TokenCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Token update
   */
  export type TokenUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * The data needed to update a Token.
     */
    data: XOR<TokenUpdateInput, TokenUncheckedUpdateInput>
    /**
     * Choose, which Token to update.
     */
    where: TokenWhereUniqueInput
  }


  /**
   * Token updateMany
   */
  export type TokenUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tokens.
     */
    data: XOR<TokenUpdateManyMutationInput, TokenUncheckedUpdateManyInput>
    /**
     * Filter which Tokens to update
     */
    where?: TokenWhereInput
  }


  /**
   * Token upsert
   */
  export type TokenUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * The filter to search for the Token to update in case it exists.
     */
    where: TokenWhereUniqueInput
    /**
     * In case the Token found by the `where` argument doesn't exist, create a new Token with this data.
     */
    create: XOR<TokenCreateInput, TokenUncheckedCreateInput>
    /**
     * In case the Token was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TokenUpdateInput, TokenUncheckedUpdateInput>
  }


  /**
   * Token delete
   */
  export type TokenDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter which Token to delete.
     */
    where: TokenWhereUniqueInput
  }


  /**
   * Token deleteMany
   */
  export type TokenDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tokens to delete
     */
    where?: TokenWhereInput
  }


  /**
   * Token without action
   */
  export type TokenDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TokenInclude<ExtArgs> | null
  }



  /**
   * Model Group
   */

  export type AggregateGroup = {
    _count: GroupCountAggregateOutputType | null
    _avg: GroupAvgAggregateOutputType | null
    _sum: GroupSumAggregateOutputType | null
    _min: GroupMinAggregateOutputType | null
    _max: GroupMaxAggregateOutputType | null
  }

  export type GroupAvgAggregateOutputType = {
    id: number | null
    workPlaceId: number | null
  }

  export type GroupSumAggregateOutputType = {
    id: number | null
    workPlaceId: number | null
  }

  export type GroupMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    workPlaceId: number | null
  }

  export type GroupMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    workPlaceId: number | null
  }

  export type GroupCountAggregateOutputType = {
    id: number
    name: number
    description: number
    workPlaceId: number
    _all: number
  }


  export type GroupAvgAggregateInputType = {
    id?: true
    workPlaceId?: true
  }

  export type GroupSumAggregateInputType = {
    id?: true
    workPlaceId?: true
  }

  export type GroupMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    workPlaceId?: true
  }

  export type GroupMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    workPlaceId?: true
  }

  export type GroupCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    workPlaceId?: true
    _all?: true
  }

  export type GroupAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Group to aggregate.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Groups
    **/
    _count?: true | GroupCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GroupAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GroupSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GroupMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GroupMaxAggregateInputType
  }

  export type GetGroupAggregateType<T extends GroupAggregateArgs> = {
        [P in keyof T & keyof AggregateGroup]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGroup[P]>
      : GetScalarType<T[P], AggregateGroup[P]>
  }




  export type GroupGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: GroupWhereInput
    orderBy?: GroupOrderByWithAggregationInput | GroupOrderByWithAggregationInput[]
    by: GroupScalarFieldEnum[] | GroupScalarFieldEnum
    having?: GroupScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GroupCountAggregateInputType | true
    _avg?: GroupAvgAggregateInputType
    _sum?: GroupSumAggregateInputType
    _min?: GroupMinAggregateInputType
    _max?: GroupMaxAggregateInputType
  }

  export type GroupGroupByOutputType = {
    id: number
    name: string
    description: string | null
    workPlaceId: number
    _count: GroupCountAggregateOutputType | null
    _avg: GroupAvgAggregateOutputType | null
    _sum: GroupSumAggregateOutputType | null
    _min: GroupMinAggregateOutputType | null
    _max: GroupMaxAggregateOutputType | null
  }

  type GetGroupGroupByPayload<T extends GroupGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GroupGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GroupGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GroupGroupByOutputType[P]>
            : GetScalarType<T[P], GroupGroupByOutputType[P]>
        }
      >
    >


  export type GroupSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    workPlaceId?: boolean
    workPlace?: boolean | WorkPlaceDefaultArgs<ExtArgs>
    users?: boolean | Group$usersArgs<ExtArgs>
    days?: boolean | Group$daysArgs<ExtArgs>
    _count?: boolean | GroupCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["group"]>

  export type GroupSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    workPlaceId?: boolean
  }

  export type GroupInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    workPlace?: boolean | WorkPlaceDefaultArgs<ExtArgs>
    users?: boolean | Group$usersArgs<ExtArgs>
    days?: boolean | Group$daysArgs<ExtArgs>
    _count?: boolean | GroupCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $GroupPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Group"
    objects: {
      workPlace: Prisma.$WorkPlacePayload<ExtArgs>
      users: Prisma.$UserPayload<ExtArgs>[]
      days: Prisma.$DayPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetResult<{
      id: number
      name: string
      description: string | null
      workPlaceId: number
    }, ExtArgs["result"]["group"]>
    composites: {}
  }


  type GroupGetPayload<S extends boolean | null | undefined | GroupDefaultArgs> = $Result.GetResult<Prisma.$GroupPayload, S>

  type GroupCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<GroupFindManyArgs, 'select' | 'include'> & {
      select?: GroupCountAggregateInputType | true
    }

  export interface GroupDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Group'], meta: { name: 'Group' } }
    /**
     * Find zero or one Group that matches the filter.
     * @param {GroupFindUniqueArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends GroupFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, GroupFindUniqueArgs<ExtArgs>>
    ): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Group that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {GroupFindUniqueOrThrowArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends GroupFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, GroupFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Group that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupFindFirstArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends GroupFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, GroupFindFirstArgs<ExtArgs>>
    ): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Group that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupFindFirstOrThrowArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends GroupFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, GroupFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Groups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Groups
     * const groups = await prisma.group.findMany()
     * 
     * // Get first 10 Groups
     * const groups = await prisma.group.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const groupWithIdOnly = await prisma.group.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends GroupFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GroupFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Group.
     * @param {GroupCreateArgs} args - Arguments to create a Group.
     * @example
     * // Create one Group
     * const Group = await prisma.group.create({
     *   data: {
     *     // ... data to create a Group
     *   }
     * })
     * 
    **/
    create<T extends GroupCreateArgs<ExtArgs>>(
      args: SelectSubset<T, GroupCreateArgs<ExtArgs>>
    ): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Groups.
     *     @param {GroupCreateManyArgs} args - Arguments to create many Groups.
     *     @example
     *     // Create many Groups
     *     const group = await prisma.group.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends GroupCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GroupCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Group.
     * @param {GroupDeleteArgs} args - Arguments to delete one Group.
     * @example
     * // Delete one Group
     * const Group = await prisma.group.delete({
     *   where: {
     *     // ... filter to delete one Group
     *   }
     * })
     * 
    **/
    delete<T extends GroupDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, GroupDeleteArgs<ExtArgs>>
    ): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Group.
     * @param {GroupUpdateArgs} args - Arguments to update one Group.
     * @example
     * // Update one Group
     * const group = await prisma.group.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends GroupUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, GroupUpdateArgs<ExtArgs>>
    ): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Groups.
     * @param {GroupDeleteManyArgs} args - Arguments to filter Groups to delete.
     * @example
     * // Delete a few Groups
     * const { count } = await prisma.group.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends GroupDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GroupDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Groups
     * const group = await prisma.group.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends GroupUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, GroupUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Group.
     * @param {GroupUpsertArgs} args - Arguments to update or create a Group.
     * @example
     * // Update or create a Group
     * const group = await prisma.group.upsert({
     *   create: {
     *     // ... data to create a Group
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Group we want to update
     *   }
     * })
    **/
    upsert<T extends GroupUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, GroupUpsertArgs<ExtArgs>>
    ): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupCountArgs} args - Arguments to filter Groups to count.
     * @example
     * // Count the number of Groups
     * const count = await prisma.group.count({
     *   where: {
     *     // ... the filter for the Groups we want to count
     *   }
     * })
    **/
    count<T extends GroupCountArgs>(
      args?: Subset<T, GroupCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GroupCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Group.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GroupAggregateArgs>(args: Subset<T, GroupAggregateArgs>): Prisma.PrismaPromise<GetGroupAggregateType<T>>

    /**
     * Group by Group.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GroupGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GroupGroupByArgs['orderBy'] }
        : { orderBy?: GroupGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GroupGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGroupGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Group model
   */
  readonly fields: GroupFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Group.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GroupClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    workPlace<T extends WorkPlaceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkPlaceDefaultArgs<ExtArgs>>): Prisma__WorkPlaceClient<$Result.GetResult<Prisma.$WorkPlacePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    users<T extends Group$usersArgs<ExtArgs> = {}>(args?: Subset<T, Group$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'> | Null>;

    days<T extends Group$daysArgs<ExtArgs> = {}>(args?: Subset<T, Group$daysArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DayPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Group model
   */ 
  interface GroupFieldRefs {
    readonly id: FieldRef<"Group", 'Int'>
    readonly name: FieldRef<"Group", 'String'>
    readonly description: FieldRef<"Group", 'String'>
    readonly workPlaceId: FieldRef<"Group", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Group findUnique
   */
  export type GroupFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where: GroupWhereUniqueInput
  }


  /**
   * Group findUniqueOrThrow
   */
  export type GroupFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where: GroupWhereUniqueInput
  }


  /**
   * Group findFirst
   */
  export type GroupFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Groups.
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Groups.
     */
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }


  /**
   * Group findFirstOrThrow
   */
  export type GroupFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Groups.
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Groups.
     */
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }


  /**
   * Group findMany
   */
  export type GroupFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Groups to fetch.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Groups.
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }


  /**
   * Group create
   */
  export type GroupCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * The data needed to create a Group.
     */
    data: XOR<GroupCreateInput, GroupUncheckedCreateInput>
  }


  /**
   * Group createMany
   */
  export type GroupCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Groups.
     */
    data: GroupCreateManyInput | GroupCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Group update
   */
  export type GroupUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * The data needed to update a Group.
     */
    data: XOR<GroupUpdateInput, GroupUncheckedUpdateInput>
    /**
     * Choose, which Group to update.
     */
    where: GroupWhereUniqueInput
  }


  /**
   * Group updateMany
   */
  export type GroupUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Groups.
     */
    data: XOR<GroupUpdateManyMutationInput, GroupUncheckedUpdateManyInput>
    /**
     * Filter which Groups to update
     */
    where?: GroupWhereInput
  }


  /**
   * Group upsert
   */
  export type GroupUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * The filter to search for the Group to update in case it exists.
     */
    where: GroupWhereUniqueInput
    /**
     * In case the Group found by the `where` argument doesn't exist, create a new Group with this data.
     */
    create: XOR<GroupCreateInput, GroupUncheckedCreateInput>
    /**
     * In case the Group was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GroupUpdateInput, GroupUncheckedUpdateInput>
  }


  /**
   * Group delete
   */
  export type GroupDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter which Group to delete.
     */
    where: GroupWhereUniqueInput
  }


  /**
   * Group deleteMany
   */
  export type GroupDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Groups to delete
     */
    where?: GroupWhereInput
  }


  /**
   * Group.users
   */
  export type Group$usersArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * Group.days
   */
  export type Group$daysArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Day
     */
    select?: DaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DayInclude<ExtArgs> | null
    where?: DayWhereInput
    orderBy?: DayOrderByWithRelationInput | DayOrderByWithRelationInput[]
    cursor?: DayWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DayScalarFieldEnum | DayScalarFieldEnum[]
  }


  /**
   * Group without action
   */
  export type GroupDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupInclude<ExtArgs> | null
  }



  /**
   * Model Day
   */

  export type AggregateDay = {
    _count: DayCountAggregateOutputType | null
    _avg: DayAvgAggregateOutputType | null
    _sum: DaySumAggregateOutputType | null
    _min: DayMinAggregateOutputType | null
    _max: DayMaxAggregateOutputType | null
  }

  export type DayAvgAggregateOutputType = {
    id: number | null
    groupId: number | null
  }

  export type DaySumAggregateOutputType = {
    id: number | null
    groupId: number | null
  }

  export type DayMinAggregateOutputType = {
    id: number | null
    date: string | null
    groupId: number | null
  }

  export type DayMaxAggregateOutputType = {
    id: number | null
    date: string | null
    groupId: number | null
  }

  export type DayCountAggregateOutputType = {
    id: number
    date: number
    groupId: number
    _all: number
  }


  export type DayAvgAggregateInputType = {
    id?: true
    groupId?: true
  }

  export type DaySumAggregateInputType = {
    id?: true
    groupId?: true
  }

  export type DayMinAggregateInputType = {
    id?: true
    date?: true
    groupId?: true
  }

  export type DayMaxAggregateInputType = {
    id?: true
    date?: true
    groupId?: true
  }

  export type DayCountAggregateInputType = {
    id?: true
    date?: true
    groupId?: true
    _all?: true
  }

  export type DayAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Day to aggregate.
     */
    where?: DayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Days to fetch.
     */
    orderBy?: DayOrderByWithRelationInput | DayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Days from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Days.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Days
    **/
    _count?: true | DayCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DayAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DaySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DayMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DayMaxAggregateInputType
  }

  export type GetDayAggregateType<T extends DayAggregateArgs> = {
        [P in keyof T & keyof AggregateDay]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDay[P]>
      : GetScalarType<T[P], AggregateDay[P]>
  }




  export type DayGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: DayWhereInput
    orderBy?: DayOrderByWithAggregationInput | DayOrderByWithAggregationInput[]
    by: DayScalarFieldEnum[] | DayScalarFieldEnum
    having?: DayScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DayCountAggregateInputType | true
    _avg?: DayAvgAggregateInputType
    _sum?: DaySumAggregateInputType
    _min?: DayMinAggregateInputType
    _max?: DayMaxAggregateInputType
  }

  export type DayGroupByOutputType = {
    id: number
    date: string
    groupId: number
    _count: DayCountAggregateOutputType | null
    _avg: DayAvgAggregateOutputType | null
    _sum: DaySumAggregateOutputType | null
    _min: DayMinAggregateOutputType | null
    _max: DayMaxAggregateOutputType | null
  }

  type GetDayGroupByPayload<T extends DayGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DayGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DayGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DayGroupByOutputType[P]>
            : GetScalarType<T[P], DayGroupByOutputType[P]>
        }
      >
    >


  export type DaySelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    groupId?: boolean
    group?: boolean | GroupDefaultArgs<ExtArgs>
    usersInDay?: boolean | Day$usersInDayArgs<ExtArgs>
    _count?: boolean | DayCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["day"]>

  export type DaySelectScalar = {
    id?: boolean
    date?: boolean
    groupId?: boolean
  }

  export type DayInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    group?: boolean | GroupDefaultArgs<ExtArgs>
    usersInDay?: boolean | Day$usersInDayArgs<ExtArgs>
    _count?: boolean | DayCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $DayPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Day"
    objects: {
      group: Prisma.$GroupPayload<ExtArgs>
      usersInDay: Prisma.$UserInDayPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetResult<{
      id: number
      date: string
      groupId: number
    }, ExtArgs["result"]["day"]>
    composites: {}
  }


  type DayGetPayload<S extends boolean | null | undefined | DayDefaultArgs> = $Result.GetResult<Prisma.$DayPayload, S>

  type DayCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<DayFindManyArgs, 'select' | 'include'> & {
      select?: DayCountAggregateInputType | true
    }

  export interface DayDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Day'], meta: { name: 'Day' } }
    /**
     * Find zero or one Day that matches the filter.
     * @param {DayFindUniqueArgs} args - Arguments to find a Day
     * @example
     * // Get one Day
     * const day = await prisma.day.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DayFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, DayFindUniqueArgs<ExtArgs>>
    ): Prisma__DayClient<$Result.GetResult<Prisma.$DayPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Day that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {DayFindUniqueOrThrowArgs} args - Arguments to find a Day
     * @example
     * // Get one Day
     * const day = await prisma.day.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends DayFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DayFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__DayClient<$Result.GetResult<Prisma.$DayPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Day that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DayFindFirstArgs} args - Arguments to find a Day
     * @example
     * // Get one Day
     * const day = await prisma.day.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DayFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, DayFindFirstArgs<ExtArgs>>
    ): Prisma__DayClient<$Result.GetResult<Prisma.$DayPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Day that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DayFindFirstOrThrowArgs} args - Arguments to find a Day
     * @example
     * // Get one Day
     * const day = await prisma.day.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends DayFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DayFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__DayClient<$Result.GetResult<Prisma.$DayPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Days that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DayFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Days
     * const days = await prisma.day.findMany()
     * 
     * // Get first 10 Days
     * const days = await prisma.day.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dayWithIdOnly = await prisma.day.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends DayFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DayFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DayPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Day.
     * @param {DayCreateArgs} args - Arguments to create a Day.
     * @example
     * // Create one Day
     * const Day = await prisma.day.create({
     *   data: {
     *     // ... data to create a Day
     *   }
     * })
     * 
    **/
    create<T extends DayCreateArgs<ExtArgs>>(
      args: SelectSubset<T, DayCreateArgs<ExtArgs>>
    ): Prisma__DayClient<$Result.GetResult<Prisma.$DayPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Days.
     *     @param {DayCreateManyArgs} args - Arguments to create many Days.
     *     @example
     *     // Create many Days
     *     const day = await prisma.day.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends DayCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DayCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Day.
     * @param {DayDeleteArgs} args - Arguments to delete one Day.
     * @example
     * // Delete one Day
     * const Day = await prisma.day.delete({
     *   where: {
     *     // ... filter to delete one Day
     *   }
     * })
     * 
    **/
    delete<T extends DayDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, DayDeleteArgs<ExtArgs>>
    ): Prisma__DayClient<$Result.GetResult<Prisma.$DayPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Day.
     * @param {DayUpdateArgs} args - Arguments to update one Day.
     * @example
     * // Update one Day
     * const day = await prisma.day.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DayUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, DayUpdateArgs<ExtArgs>>
    ): Prisma__DayClient<$Result.GetResult<Prisma.$DayPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Days.
     * @param {DayDeleteManyArgs} args - Arguments to filter Days to delete.
     * @example
     * // Delete a few Days
     * const { count } = await prisma.day.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DayDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DayDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Days.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DayUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Days
     * const day = await prisma.day.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DayUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, DayUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Day.
     * @param {DayUpsertArgs} args - Arguments to update or create a Day.
     * @example
     * // Update or create a Day
     * const day = await prisma.day.upsert({
     *   create: {
     *     // ... data to create a Day
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Day we want to update
     *   }
     * })
    **/
    upsert<T extends DayUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, DayUpsertArgs<ExtArgs>>
    ): Prisma__DayClient<$Result.GetResult<Prisma.$DayPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Days.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DayCountArgs} args - Arguments to filter Days to count.
     * @example
     * // Count the number of Days
     * const count = await prisma.day.count({
     *   where: {
     *     // ... the filter for the Days we want to count
     *   }
     * })
    **/
    count<T extends DayCountArgs>(
      args?: Subset<T, DayCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DayCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Day.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DayAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DayAggregateArgs>(args: Subset<T, DayAggregateArgs>): Prisma.PrismaPromise<GetDayAggregateType<T>>

    /**
     * Group by Day.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DayGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DayGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DayGroupByArgs['orderBy'] }
        : { orderBy?: DayGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DayGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDayGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Day model
   */
  readonly fields: DayFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Day.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DayClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    group<T extends GroupDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GroupDefaultArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    usersInDay<T extends Day$usersInDayArgs<ExtArgs> = {}>(args?: Subset<T, Day$usersInDayArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserInDayPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Day model
   */ 
  interface DayFieldRefs {
    readonly id: FieldRef<"Day", 'Int'>
    readonly date: FieldRef<"Day", 'String'>
    readonly groupId: FieldRef<"Day", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Day findUnique
   */
  export type DayFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Day
     */
    select?: DaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DayInclude<ExtArgs> | null
    /**
     * Filter, which Day to fetch.
     */
    where: DayWhereUniqueInput
  }


  /**
   * Day findUniqueOrThrow
   */
  export type DayFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Day
     */
    select?: DaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DayInclude<ExtArgs> | null
    /**
     * Filter, which Day to fetch.
     */
    where: DayWhereUniqueInput
  }


  /**
   * Day findFirst
   */
  export type DayFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Day
     */
    select?: DaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DayInclude<ExtArgs> | null
    /**
     * Filter, which Day to fetch.
     */
    where?: DayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Days to fetch.
     */
    orderBy?: DayOrderByWithRelationInput | DayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Days.
     */
    cursor?: DayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Days from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Days.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Days.
     */
    distinct?: DayScalarFieldEnum | DayScalarFieldEnum[]
  }


  /**
   * Day findFirstOrThrow
   */
  export type DayFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Day
     */
    select?: DaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DayInclude<ExtArgs> | null
    /**
     * Filter, which Day to fetch.
     */
    where?: DayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Days to fetch.
     */
    orderBy?: DayOrderByWithRelationInput | DayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Days.
     */
    cursor?: DayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Days from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Days.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Days.
     */
    distinct?: DayScalarFieldEnum | DayScalarFieldEnum[]
  }


  /**
   * Day findMany
   */
  export type DayFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Day
     */
    select?: DaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DayInclude<ExtArgs> | null
    /**
     * Filter, which Days to fetch.
     */
    where?: DayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Days to fetch.
     */
    orderBy?: DayOrderByWithRelationInput | DayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Days.
     */
    cursor?: DayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Days from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Days.
     */
    skip?: number
    distinct?: DayScalarFieldEnum | DayScalarFieldEnum[]
  }


  /**
   * Day create
   */
  export type DayCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Day
     */
    select?: DaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DayInclude<ExtArgs> | null
    /**
     * The data needed to create a Day.
     */
    data: XOR<DayCreateInput, DayUncheckedCreateInput>
  }


  /**
   * Day createMany
   */
  export type DayCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Days.
     */
    data: DayCreateManyInput | DayCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Day update
   */
  export type DayUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Day
     */
    select?: DaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DayInclude<ExtArgs> | null
    /**
     * The data needed to update a Day.
     */
    data: XOR<DayUpdateInput, DayUncheckedUpdateInput>
    /**
     * Choose, which Day to update.
     */
    where: DayWhereUniqueInput
  }


  /**
   * Day updateMany
   */
  export type DayUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Days.
     */
    data: XOR<DayUpdateManyMutationInput, DayUncheckedUpdateManyInput>
    /**
     * Filter which Days to update
     */
    where?: DayWhereInput
  }


  /**
   * Day upsert
   */
  export type DayUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Day
     */
    select?: DaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DayInclude<ExtArgs> | null
    /**
     * The filter to search for the Day to update in case it exists.
     */
    where: DayWhereUniqueInput
    /**
     * In case the Day found by the `where` argument doesn't exist, create a new Day with this data.
     */
    create: XOR<DayCreateInput, DayUncheckedCreateInput>
    /**
     * In case the Day was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DayUpdateInput, DayUncheckedUpdateInput>
  }


  /**
   * Day delete
   */
  export type DayDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Day
     */
    select?: DaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DayInclude<ExtArgs> | null
    /**
     * Filter which Day to delete.
     */
    where: DayWhereUniqueInput
  }


  /**
   * Day deleteMany
   */
  export type DayDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Days to delete
     */
    where?: DayWhereInput
  }


  /**
   * Day.usersInDay
   */
  export type Day$usersInDayArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInDay
     */
    select?: UserInDaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInDayInclude<ExtArgs> | null
    where?: UserInDayWhereInput
    orderBy?: UserInDayOrderByWithRelationInput | UserInDayOrderByWithRelationInput[]
    cursor?: UserInDayWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserInDayScalarFieldEnum | UserInDayScalarFieldEnum[]
  }


  /**
   * Day without action
   */
  export type DayDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Day
     */
    select?: DaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DayInclude<ExtArgs> | null
  }



  /**
   * Model UserInDay
   */

  export type AggregateUserInDay = {
    _count: UserInDayCountAggregateOutputType | null
    _avg: UserInDayAvgAggregateOutputType | null
    _sum: UserInDaySumAggregateOutputType | null
    _min: UserInDayMinAggregateOutputType | null
    _max: UserInDayMaxAggregateOutputType | null
  }

  export type UserInDayAvgAggregateOutputType = {
    id: number | null
    dayId: number | null
    userId: number | null
  }

  export type UserInDaySumAggregateOutputType = {
    id: number | null
    dayId: number | null
    userId: number | null
  }

  export type UserInDayMinAggregateOutputType = {
    id: number | null
    from: string | null
    to: string | null
    dayId: number | null
    userId: number | null
  }

  export type UserInDayMaxAggregateOutputType = {
    id: number | null
    from: string | null
    to: string | null
    dayId: number | null
    userId: number | null
  }

  export type UserInDayCountAggregateOutputType = {
    id: number
    from: number
    to: number
    dayId: number
    userId: number
    _all: number
  }


  export type UserInDayAvgAggregateInputType = {
    id?: true
    dayId?: true
    userId?: true
  }

  export type UserInDaySumAggregateInputType = {
    id?: true
    dayId?: true
    userId?: true
  }

  export type UserInDayMinAggregateInputType = {
    id?: true
    from?: true
    to?: true
    dayId?: true
    userId?: true
  }

  export type UserInDayMaxAggregateInputType = {
    id?: true
    from?: true
    to?: true
    dayId?: true
    userId?: true
  }

  export type UserInDayCountAggregateInputType = {
    id?: true
    from?: true
    to?: true
    dayId?: true
    userId?: true
    _all?: true
  }

  export type UserInDayAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserInDay to aggregate.
     */
    where?: UserInDayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserInDays to fetch.
     */
    orderBy?: UserInDayOrderByWithRelationInput | UserInDayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserInDayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserInDays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserInDays.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserInDays
    **/
    _count?: true | UserInDayCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserInDayAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserInDaySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserInDayMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserInDayMaxAggregateInputType
  }

  export type GetUserInDayAggregateType<T extends UserInDayAggregateArgs> = {
        [P in keyof T & keyof AggregateUserInDay]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserInDay[P]>
      : GetScalarType<T[P], AggregateUserInDay[P]>
  }




  export type UserInDayGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: UserInDayWhereInput
    orderBy?: UserInDayOrderByWithAggregationInput | UserInDayOrderByWithAggregationInput[]
    by: UserInDayScalarFieldEnum[] | UserInDayScalarFieldEnum
    having?: UserInDayScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserInDayCountAggregateInputType | true
    _avg?: UserInDayAvgAggregateInputType
    _sum?: UserInDaySumAggregateInputType
    _min?: UserInDayMinAggregateInputType
    _max?: UserInDayMaxAggregateInputType
  }

  export type UserInDayGroupByOutputType = {
    id: number
    from: string
    to: string
    dayId: number
    userId: number
    _count: UserInDayCountAggregateOutputType | null
    _avg: UserInDayAvgAggregateOutputType | null
    _sum: UserInDaySumAggregateOutputType | null
    _min: UserInDayMinAggregateOutputType | null
    _max: UserInDayMaxAggregateOutputType | null
  }

  type GetUserInDayGroupByPayload<T extends UserInDayGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserInDayGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserInDayGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserInDayGroupByOutputType[P]>
            : GetScalarType<T[P], UserInDayGroupByOutputType[P]>
        }
      >
    >


  export type UserInDaySelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    from?: boolean
    to?: boolean
    dayId?: boolean
    userId?: boolean
    day?: boolean | DayDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userInDay"]>

  export type UserInDaySelectScalar = {
    id?: boolean
    from?: boolean
    to?: boolean
    dayId?: boolean
    userId?: boolean
  }

  export type UserInDayInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    day?: boolean | DayDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $UserInDayPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "UserInDay"
    objects: {
      day: Prisma.$DayPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetResult<{
      id: number
      from: string
      to: string
      dayId: number
      userId: number
    }, ExtArgs["result"]["userInDay"]>
    composites: {}
  }


  type UserInDayGetPayload<S extends boolean | null | undefined | UserInDayDefaultArgs> = $Result.GetResult<Prisma.$UserInDayPayload, S>

  type UserInDayCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<UserInDayFindManyArgs, 'select' | 'include'> & {
      select?: UserInDayCountAggregateInputType | true
    }

  export interface UserInDayDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserInDay'], meta: { name: 'UserInDay' } }
    /**
     * Find zero or one UserInDay that matches the filter.
     * @param {UserInDayFindUniqueArgs} args - Arguments to find a UserInDay
     * @example
     * // Get one UserInDay
     * const userInDay = await prisma.userInDay.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserInDayFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserInDayFindUniqueArgs<ExtArgs>>
    ): Prisma__UserInDayClient<$Result.GetResult<Prisma.$UserInDayPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one UserInDay that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserInDayFindUniqueOrThrowArgs} args - Arguments to find a UserInDay
     * @example
     * // Get one UserInDay
     * const userInDay = await prisma.userInDay.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserInDayFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserInDayFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserInDayClient<$Result.GetResult<Prisma.$UserInDayPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first UserInDay that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserInDayFindFirstArgs} args - Arguments to find a UserInDay
     * @example
     * // Get one UserInDay
     * const userInDay = await prisma.userInDay.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserInDayFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserInDayFindFirstArgs<ExtArgs>>
    ): Prisma__UserInDayClient<$Result.GetResult<Prisma.$UserInDayPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first UserInDay that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserInDayFindFirstOrThrowArgs} args - Arguments to find a UserInDay
     * @example
     * // Get one UserInDay
     * const userInDay = await prisma.userInDay.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserInDayFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserInDayFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserInDayClient<$Result.GetResult<Prisma.$UserInDayPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more UserInDays that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserInDayFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserInDays
     * const userInDays = await prisma.userInDay.findMany()
     * 
     * // Get first 10 UserInDays
     * const userInDays = await prisma.userInDay.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userInDayWithIdOnly = await prisma.userInDay.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserInDayFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserInDayFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserInDayPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a UserInDay.
     * @param {UserInDayCreateArgs} args - Arguments to create a UserInDay.
     * @example
     * // Create one UserInDay
     * const UserInDay = await prisma.userInDay.create({
     *   data: {
     *     // ... data to create a UserInDay
     *   }
     * })
     * 
    **/
    create<T extends UserInDayCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserInDayCreateArgs<ExtArgs>>
    ): Prisma__UserInDayClient<$Result.GetResult<Prisma.$UserInDayPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many UserInDays.
     *     @param {UserInDayCreateManyArgs} args - Arguments to create many UserInDays.
     *     @example
     *     // Create many UserInDays
     *     const userInDay = await prisma.userInDay.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserInDayCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserInDayCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserInDay.
     * @param {UserInDayDeleteArgs} args - Arguments to delete one UserInDay.
     * @example
     * // Delete one UserInDay
     * const UserInDay = await prisma.userInDay.delete({
     *   where: {
     *     // ... filter to delete one UserInDay
     *   }
     * })
     * 
    **/
    delete<T extends UserInDayDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserInDayDeleteArgs<ExtArgs>>
    ): Prisma__UserInDayClient<$Result.GetResult<Prisma.$UserInDayPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one UserInDay.
     * @param {UserInDayUpdateArgs} args - Arguments to update one UserInDay.
     * @example
     * // Update one UserInDay
     * const userInDay = await prisma.userInDay.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserInDayUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserInDayUpdateArgs<ExtArgs>>
    ): Prisma__UserInDayClient<$Result.GetResult<Prisma.$UserInDayPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more UserInDays.
     * @param {UserInDayDeleteManyArgs} args - Arguments to filter UserInDays to delete.
     * @example
     * // Delete a few UserInDays
     * const { count } = await prisma.userInDay.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserInDayDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserInDayDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserInDays.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserInDayUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserInDays
     * const userInDay = await prisma.userInDay.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserInDayUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserInDayUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserInDay.
     * @param {UserInDayUpsertArgs} args - Arguments to update or create a UserInDay.
     * @example
     * // Update or create a UserInDay
     * const userInDay = await prisma.userInDay.upsert({
     *   create: {
     *     // ... data to create a UserInDay
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserInDay we want to update
     *   }
     * })
    **/
    upsert<T extends UserInDayUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserInDayUpsertArgs<ExtArgs>>
    ): Prisma__UserInDayClient<$Result.GetResult<Prisma.$UserInDayPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of UserInDays.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserInDayCountArgs} args - Arguments to filter UserInDays to count.
     * @example
     * // Count the number of UserInDays
     * const count = await prisma.userInDay.count({
     *   where: {
     *     // ... the filter for the UserInDays we want to count
     *   }
     * })
    **/
    count<T extends UserInDayCountArgs>(
      args?: Subset<T, UserInDayCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserInDayCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserInDay.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserInDayAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserInDayAggregateArgs>(args: Subset<T, UserInDayAggregateArgs>): Prisma.PrismaPromise<GetUserInDayAggregateType<T>>

    /**
     * Group by UserInDay.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserInDayGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserInDayGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserInDayGroupByArgs['orderBy'] }
        : { orderBy?: UserInDayGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserInDayGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserInDayGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserInDay model
   */
  readonly fields: UserInDayFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserInDay.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserInDayClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    day<T extends DayDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DayDefaultArgs<ExtArgs>>): Prisma__DayClient<$Result.GetResult<Prisma.$DayPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the UserInDay model
   */ 
  interface UserInDayFieldRefs {
    readonly id: FieldRef<"UserInDay", 'Int'>
    readonly from: FieldRef<"UserInDay", 'String'>
    readonly to: FieldRef<"UserInDay", 'String'>
    readonly dayId: FieldRef<"UserInDay", 'Int'>
    readonly userId: FieldRef<"UserInDay", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * UserInDay findUnique
   */
  export type UserInDayFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInDay
     */
    select?: UserInDaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInDayInclude<ExtArgs> | null
    /**
     * Filter, which UserInDay to fetch.
     */
    where: UserInDayWhereUniqueInput
  }


  /**
   * UserInDay findUniqueOrThrow
   */
  export type UserInDayFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInDay
     */
    select?: UserInDaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInDayInclude<ExtArgs> | null
    /**
     * Filter, which UserInDay to fetch.
     */
    where: UserInDayWhereUniqueInput
  }


  /**
   * UserInDay findFirst
   */
  export type UserInDayFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInDay
     */
    select?: UserInDaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInDayInclude<ExtArgs> | null
    /**
     * Filter, which UserInDay to fetch.
     */
    where?: UserInDayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserInDays to fetch.
     */
    orderBy?: UserInDayOrderByWithRelationInput | UserInDayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserInDays.
     */
    cursor?: UserInDayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserInDays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserInDays.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserInDays.
     */
    distinct?: UserInDayScalarFieldEnum | UserInDayScalarFieldEnum[]
  }


  /**
   * UserInDay findFirstOrThrow
   */
  export type UserInDayFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInDay
     */
    select?: UserInDaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInDayInclude<ExtArgs> | null
    /**
     * Filter, which UserInDay to fetch.
     */
    where?: UserInDayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserInDays to fetch.
     */
    orderBy?: UserInDayOrderByWithRelationInput | UserInDayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserInDays.
     */
    cursor?: UserInDayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserInDays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserInDays.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserInDays.
     */
    distinct?: UserInDayScalarFieldEnum | UserInDayScalarFieldEnum[]
  }


  /**
   * UserInDay findMany
   */
  export type UserInDayFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInDay
     */
    select?: UserInDaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInDayInclude<ExtArgs> | null
    /**
     * Filter, which UserInDays to fetch.
     */
    where?: UserInDayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserInDays to fetch.
     */
    orderBy?: UserInDayOrderByWithRelationInput | UserInDayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserInDays.
     */
    cursor?: UserInDayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserInDays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserInDays.
     */
    skip?: number
    distinct?: UserInDayScalarFieldEnum | UserInDayScalarFieldEnum[]
  }


  /**
   * UserInDay create
   */
  export type UserInDayCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInDay
     */
    select?: UserInDaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInDayInclude<ExtArgs> | null
    /**
     * The data needed to create a UserInDay.
     */
    data: XOR<UserInDayCreateInput, UserInDayUncheckedCreateInput>
  }


  /**
   * UserInDay createMany
   */
  export type UserInDayCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserInDays.
     */
    data: UserInDayCreateManyInput | UserInDayCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * UserInDay update
   */
  export type UserInDayUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInDay
     */
    select?: UserInDaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInDayInclude<ExtArgs> | null
    /**
     * The data needed to update a UserInDay.
     */
    data: XOR<UserInDayUpdateInput, UserInDayUncheckedUpdateInput>
    /**
     * Choose, which UserInDay to update.
     */
    where: UserInDayWhereUniqueInput
  }


  /**
   * UserInDay updateMany
   */
  export type UserInDayUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserInDays.
     */
    data: XOR<UserInDayUpdateManyMutationInput, UserInDayUncheckedUpdateManyInput>
    /**
     * Filter which UserInDays to update
     */
    where?: UserInDayWhereInput
  }


  /**
   * UserInDay upsert
   */
  export type UserInDayUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInDay
     */
    select?: UserInDaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInDayInclude<ExtArgs> | null
    /**
     * The filter to search for the UserInDay to update in case it exists.
     */
    where: UserInDayWhereUniqueInput
    /**
     * In case the UserInDay found by the `where` argument doesn't exist, create a new UserInDay with this data.
     */
    create: XOR<UserInDayCreateInput, UserInDayUncheckedCreateInput>
    /**
     * In case the UserInDay was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserInDayUpdateInput, UserInDayUncheckedUpdateInput>
  }


  /**
   * UserInDay delete
   */
  export type UserInDayDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInDay
     */
    select?: UserInDaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInDayInclude<ExtArgs> | null
    /**
     * Filter which UserInDay to delete.
     */
    where: UserInDayWhereUniqueInput
  }


  /**
   * UserInDay deleteMany
   */
  export type UserInDayDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserInDays to delete
     */
    where?: UserInDayWhereInput
  }


  /**
   * UserInDay without action
   */
  export type UserInDayDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInDay
     */
    select?: UserInDaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInDayInclude<ExtArgs> | null
  }



  /**
   * Model WorkPlace
   */

  export type AggregateWorkPlace = {
    _count: WorkPlaceCountAggregateOutputType | null
    _avg: WorkPlaceAvgAggregateOutputType | null
    _sum: WorkPlaceSumAggregateOutputType | null
    _min: WorkPlaceMinAggregateOutputType | null
    _max: WorkPlaceMaxAggregateOutputType | null
  }

  export type WorkPlaceAvgAggregateOutputType = {
    id: number | null
  }

  export type WorkPlaceSumAggregateOutputType = {
    id: number | null
  }

  export type WorkPlaceMinAggregateOutputType = {
    id: number | null
    name: string | null
    adminId: string | null
  }

  export type WorkPlaceMaxAggregateOutputType = {
    id: number | null
    name: string | null
    adminId: string | null
  }

  export type WorkPlaceCountAggregateOutputType = {
    id: number
    name: number
    adminId: number
    _all: number
  }


  export type WorkPlaceAvgAggregateInputType = {
    id?: true
  }

  export type WorkPlaceSumAggregateInputType = {
    id?: true
  }

  export type WorkPlaceMinAggregateInputType = {
    id?: true
    name?: true
    adminId?: true
  }

  export type WorkPlaceMaxAggregateInputType = {
    id?: true
    name?: true
    adminId?: true
  }

  export type WorkPlaceCountAggregateInputType = {
    id?: true
    name?: true
    adminId?: true
    _all?: true
  }

  export type WorkPlaceAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkPlace to aggregate.
     */
    where?: WorkPlaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkPlaces to fetch.
     */
    orderBy?: WorkPlaceOrderByWithRelationInput | WorkPlaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkPlaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkPlaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkPlaces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WorkPlaces
    **/
    _count?: true | WorkPlaceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WorkPlaceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WorkPlaceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkPlaceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkPlaceMaxAggregateInputType
  }

  export type GetWorkPlaceAggregateType<T extends WorkPlaceAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkPlace]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkPlace[P]>
      : GetScalarType<T[P], AggregateWorkPlace[P]>
  }




  export type WorkPlaceGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: WorkPlaceWhereInput
    orderBy?: WorkPlaceOrderByWithAggregationInput | WorkPlaceOrderByWithAggregationInput[]
    by: WorkPlaceScalarFieldEnum[] | WorkPlaceScalarFieldEnum
    having?: WorkPlaceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkPlaceCountAggregateInputType | true
    _avg?: WorkPlaceAvgAggregateInputType
    _sum?: WorkPlaceSumAggregateInputType
    _min?: WorkPlaceMinAggregateInputType
    _max?: WorkPlaceMaxAggregateInputType
  }

  export type WorkPlaceGroupByOutputType = {
    id: number
    name: string | null
    adminId: string | null
    _count: WorkPlaceCountAggregateOutputType | null
    _avg: WorkPlaceAvgAggregateOutputType | null
    _sum: WorkPlaceSumAggregateOutputType | null
    _min: WorkPlaceMinAggregateOutputType | null
    _max: WorkPlaceMaxAggregateOutputType | null
  }

  type GetWorkPlaceGroupByPayload<T extends WorkPlaceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkPlaceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkPlaceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkPlaceGroupByOutputType[P]>
            : GetScalarType<T[P], WorkPlaceGroupByOutputType[P]>
        }
      >
    >


  export type WorkPlaceSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    adminId?: boolean
    users?: boolean | WorkPlace$usersArgs<ExtArgs>
    groups?: boolean | WorkPlace$groupsArgs<ExtArgs>
    _count?: boolean | WorkPlaceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workPlace"]>

  export type WorkPlaceSelectScalar = {
    id?: boolean
    name?: boolean
    adminId?: boolean
  }

  export type WorkPlaceInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    users?: boolean | WorkPlace$usersArgs<ExtArgs>
    groups?: boolean | WorkPlace$groupsArgs<ExtArgs>
    _count?: boolean | WorkPlaceCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $WorkPlacePayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "WorkPlace"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
      groups: Prisma.$GroupPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetResult<{
      id: number
      name: string | null
      adminId: string | null
    }, ExtArgs["result"]["workPlace"]>
    composites: {}
  }


  type WorkPlaceGetPayload<S extends boolean | null | undefined | WorkPlaceDefaultArgs> = $Result.GetResult<Prisma.$WorkPlacePayload, S>

  type WorkPlaceCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<WorkPlaceFindManyArgs, 'select' | 'include'> & {
      select?: WorkPlaceCountAggregateInputType | true
    }

  export interface WorkPlaceDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WorkPlace'], meta: { name: 'WorkPlace' } }
    /**
     * Find zero or one WorkPlace that matches the filter.
     * @param {WorkPlaceFindUniqueArgs} args - Arguments to find a WorkPlace
     * @example
     * // Get one WorkPlace
     * const workPlace = await prisma.workPlace.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends WorkPlaceFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, WorkPlaceFindUniqueArgs<ExtArgs>>
    ): Prisma__WorkPlaceClient<$Result.GetResult<Prisma.$WorkPlacePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one WorkPlace that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {WorkPlaceFindUniqueOrThrowArgs} args - Arguments to find a WorkPlace
     * @example
     * // Get one WorkPlace
     * const workPlace = await prisma.workPlace.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends WorkPlaceFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, WorkPlaceFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__WorkPlaceClient<$Result.GetResult<Prisma.$WorkPlacePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first WorkPlace that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkPlaceFindFirstArgs} args - Arguments to find a WorkPlace
     * @example
     * // Get one WorkPlace
     * const workPlace = await prisma.workPlace.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends WorkPlaceFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, WorkPlaceFindFirstArgs<ExtArgs>>
    ): Prisma__WorkPlaceClient<$Result.GetResult<Prisma.$WorkPlacePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first WorkPlace that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkPlaceFindFirstOrThrowArgs} args - Arguments to find a WorkPlace
     * @example
     * // Get one WorkPlace
     * const workPlace = await prisma.workPlace.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends WorkPlaceFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, WorkPlaceFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__WorkPlaceClient<$Result.GetResult<Prisma.$WorkPlacePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more WorkPlaces that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkPlaceFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WorkPlaces
     * const workPlaces = await prisma.workPlace.findMany()
     * 
     * // Get first 10 WorkPlaces
     * const workPlaces = await prisma.workPlace.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workPlaceWithIdOnly = await prisma.workPlace.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends WorkPlaceFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, WorkPlaceFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkPlacePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a WorkPlace.
     * @param {WorkPlaceCreateArgs} args - Arguments to create a WorkPlace.
     * @example
     * // Create one WorkPlace
     * const WorkPlace = await prisma.workPlace.create({
     *   data: {
     *     // ... data to create a WorkPlace
     *   }
     * })
     * 
    **/
    create<T extends WorkPlaceCreateArgs<ExtArgs>>(
      args: SelectSubset<T, WorkPlaceCreateArgs<ExtArgs>>
    ): Prisma__WorkPlaceClient<$Result.GetResult<Prisma.$WorkPlacePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many WorkPlaces.
     *     @param {WorkPlaceCreateManyArgs} args - Arguments to create many WorkPlaces.
     *     @example
     *     // Create many WorkPlaces
     *     const workPlace = await prisma.workPlace.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends WorkPlaceCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, WorkPlaceCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a WorkPlace.
     * @param {WorkPlaceDeleteArgs} args - Arguments to delete one WorkPlace.
     * @example
     * // Delete one WorkPlace
     * const WorkPlace = await prisma.workPlace.delete({
     *   where: {
     *     // ... filter to delete one WorkPlace
     *   }
     * })
     * 
    **/
    delete<T extends WorkPlaceDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, WorkPlaceDeleteArgs<ExtArgs>>
    ): Prisma__WorkPlaceClient<$Result.GetResult<Prisma.$WorkPlacePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one WorkPlace.
     * @param {WorkPlaceUpdateArgs} args - Arguments to update one WorkPlace.
     * @example
     * // Update one WorkPlace
     * const workPlace = await prisma.workPlace.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends WorkPlaceUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, WorkPlaceUpdateArgs<ExtArgs>>
    ): Prisma__WorkPlaceClient<$Result.GetResult<Prisma.$WorkPlacePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more WorkPlaces.
     * @param {WorkPlaceDeleteManyArgs} args - Arguments to filter WorkPlaces to delete.
     * @example
     * // Delete a few WorkPlaces
     * const { count } = await prisma.workPlace.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends WorkPlaceDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, WorkPlaceDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkPlaces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkPlaceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WorkPlaces
     * const workPlace = await prisma.workPlace.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends WorkPlaceUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, WorkPlaceUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one WorkPlace.
     * @param {WorkPlaceUpsertArgs} args - Arguments to update or create a WorkPlace.
     * @example
     * // Update or create a WorkPlace
     * const workPlace = await prisma.workPlace.upsert({
     *   create: {
     *     // ... data to create a WorkPlace
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WorkPlace we want to update
     *   }
     * })
    **/
    upsert<T extends WorkPlaceUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, WorkPlaceUpsertArgs<ExtArgs>>
    ): Prisma__WorkPlaceClient<$Result.GetResult<Prisma.$WorkPlacePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of WorkPlaces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkPlaceCountArgs} args - Arguments to filter WorkPlaces to count.
     * @example
     * // Count the number of WorkPlaces
     * const count = await prisma.workPlace.count({
     *   where: {
     *     // ... the filter for the WorkPlaces we want to count
     *   }
     * })
    **/
    count<T extends WorkPlaceCountArgs>(
      args?: Subset<T, WorkPlaceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkPlaceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WorkPlace.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkPlaceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WorkPlaceAggregateArgs>(args: Subset<T, WorkPlaceAggregateArgs>): Prisma.PrismaPromise<GetWorkPlaceAggregateType<T>>

    /**
     * Group by WorkPlace.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkPlaceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WorkPlaceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkPlaceGroupByArgs['orderBy'] }
        : { orderBy?: WorkPlaceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WorkPlaceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkPlaceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WorkPlace model
   */
  readonly fields: WorkPlaceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WorkPlace.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkPlaceClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    users<T extends WorkPlace$usersArgs<ExtArgs> = {}>(args?: Subset<T, WorkPlace$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'> | Null>;

    groups<T extends WorkPlace$groupsArgs<ExtArgs> = {}>(args?: Subset<T, WorkPlace$groupsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the WorkPlace model
   */ 
  interface WorkPlaceFieldRefs {
    readonly id: FieldRef<"WorkPlace", 'Int'>
    readonly name: FieldRef<"WorkPlace", 'String'>
    readonly adminId: FieldRef<"WorkPlace", 'String'>
  }
    

  // Custom InputTypes

  /**
   * WorkPlace findUnique
   */
  export type WorkPlaceFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkPlace
     */
    select?: WorkPlaceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorkPlaceInclude<ExtArgs> | null
    /**
     * Filter, which WorkPlace to fetch.
     */
    where: WorkPlaceWhereUniqueInput
  }


  /**
   * WorkPlace findUniqueOrThrow
   */
  export type WorkPlaceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkPlace
     */
    select?: WorkPlaceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorkPlaceInclude<ExtArgs> | null
    /**
     * Filter, which WorkPlace to fetch.
     */
    where: WorkPlaceWhereUniqueInput
  }


  /**
   * WorkPlace findFirst
   */
  export type WorkPlaceFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkPlace
     */
    select?: WorkPlaceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorkPlaceInclude<ExtArgs> | null
    /**
     * Filter, which WorkPlace to fetch.
     */
    where?: WorkPlaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkPlaces to fetch.
     */
    orderBy?: WorkPlaceOrderByWithRelationInput | WorkPlaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkPlaces.
     */
    cursor?: WorkPlaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkPlaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkPlaces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkPlaces.
     */
    distinct?: WorkPlaceScalarFieldEnum | WorkPlaceScalarFieldEnum[]
  }


  /**
   * WorkPlace findFirstOrThrow
   */
  export type WorkPlaceFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkPlace
     */
    select?: WorkPlaceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorkPlaceInclude<ExtArgs> | null
    /**
     * Filter, which WorkPlace to fetch.
     */
    where?: WorkPlaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkPlaces to fetch.
     */
    orderBy?: WorkPlaceOrderByWithRelationInput | WorkPlaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkPlaces.
     */
    cursor?: WorkPlaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkPlaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkPlaces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkPlaces.
     */
    distinct?: WorkPlaceScalarFieldEnum | WorkPlaceScalarFieldEnum[]
  }


  /**
   * WorkPlace findMany
   */
  export type WorkPlaceFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkPlace
     */
    select?: WorkPlaceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorkPlaceInclude<ExtArgs> | null
    /**
     * Filter, which WorkPlaces to fetch.
     */
    where?: WorkPlaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkPlaces to fetch.
     */
    orderBy?: WorkPlaceOrderByWithRelationInput | WorkPlaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WorkPlaces.
     */
    cursor?: WorkPlaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkPlaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkPlaces.
     */
    skip?: number
    distinct?: WorkPlaceScalarFieldEnum | WorkPlaceScalarFieldEnum[]
  }


  /**
   * WorkPlace create
   */
  export type WorkPlaceCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkPlace
     */
    select?: WorkPlaceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorkPlaceInclude<ExtArgs> | null
    /**
     * The data needed to create a WorkPlace.
     */
    data?: XOR<WorkPlaceCreateInput, WorkPlaceUncheckedCreateInput>
  }


  /**
   * WorkPlace createMany
   */
  export type WorkPlaceCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WorkPlaces.
     */
    data: WorkPlaceCreateManyInput | WorkPlaceCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * WorkPlace update
   */
  export type WorkPlaceUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkPlace
     */
    select?: WorkPlaceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorkPlaceInclude<ExtArgs> | null
    /**
     * The data needed to update a WorkPlace.
     */
    data: XOR<WorkPlaceUpdateInput, WorkPlaceUncheckedUpdateInput>
    /**
     * Choose, which WorkPlace to update.
     */
    where: WorkPlaceWhereUniqueInput
  }


  /**
   * WorkPlace updateMany
   */
  export type WorkPlaceUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WorkPlaces.
     */
    data: XOR<WorkPlaceUpdateManyMutationInput, WorkPlaceUncheckedUpdateManyInput>
    /**
     * Filter which WorkPlaces to update
     */
    where?: WorkPlaceWhereInput
  }


  /**
   * WorkPlace upsert
   */
  export type WorkPlaceUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkPlace
     */
    select?: WorkPlaceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorkPlaceInclude<ExtArgs> | null
    /**
     * The filter to search for the WorkPlace to update in case it exists.
     */
    where: WorkPlaceWhereUniqueInput
    /**
     * In case the WorkPlace found by the `where` argument doesn't exist, create a new WorkPlace with this data.
     */
    create: XOR<WorkPlaceCreateInput, WorkPlaceUncheckedCreateInput>
    /**
     * In case the WorkPlace was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkPlaceUpdateInput, WorkPlaceUncheckedUpdateInput>
  }


  /**
   * WorkPlace delete
   */
  export type WorkPlaceDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkPlace
     */
    select?: WorkPlaceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorkPlaceInclude<ExtArgs> | null
    /**
     * Filter which WorkPlace to delete.
     */
    where: WorkPlaceWhereUniqueInput
  }


  /**
   * WorkPlace deleteMany
   */
  export type WorkPlaceDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkPlaces to delete
     */
    where?: WorkPlaceWhereInput
  }


  /**
   * WorkPlace.users
   */
  export type WorkPlace$usersArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * WorkPlace.groups
   */
  export type WorkPlace$groupsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupInclude<ExtArgs> | null
    where?: GroupWhereInput
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    cursor?: GroupWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }


  /**
   * WorkPlace without action
   */
  export type WorkPlaceDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkPlace
     */
    select?: WorkPlaceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorkPlaceInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    userName: 'userName',
    phoneNumber: 'phoneNumber',
    workPlaceId: 'workPlaceId',
    groupId: 'groupId'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const TokenScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updateAt: 'updateAt',
    type: 'type',
    emailToken: 'emailToken',
    valid: 'valid',
    expiration: 'expiration',
    userId: 'userId'
  };

  export type TokenScalarFieldEnum = (typeof TokenScalarFieldEnum)[keyof typeof TokenScalarFieldEnum]


  export const GroupScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    workPlaceId: 'workPlaceId'
  };

  export type GroupScalarFieldEnum = (typeof GroupScalarFieldEnum)[keyof typeof GroupScalarFieldEnum]


  export const DayScalarFieldEnum: {
    id: 'id',
    date: 'date',
    groupId: 'groupId'
  };

  export type DayScalarFieldEnum = (typeof DayScalarFieldEnum)[keyof typeof DayScalarFieldEnum]


  export const UserInDayScalarFieldEnum: {
    id: 'id',
    from: 'from',
    to: 'to',
    dayId: 'dayId',
    userId: 'userId'
  };

  export type UserInDayScalarFieldEnum = (typeof UserInDayScalarFieldEnum)[keyof typeof UserInDayScalarFieldEnum]


  export const WorkPlaceScalarFieldEnum: {
    id: 'id',
    name: 'name',
    adminId: 'adminId'
  };

  export type WorkPlaceScalarFieldEnum = (typeof WorkPlaceScalarFieldEnum)[keyof typeof WorkPlaceScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringNullableFilter<"User"> | string | null
    name?: StringNullableFilter<"User"> | string | null
    userName?: StringNullableFilter<"User"> | string | null
    phoneNumber?: IntNullableFilter<"User"> | number | null
    workPlaceId?: IntNullableFilter<"User"> | number | null
    groupId?: IntNullableFilter<"User"> | number | null
    workPlace?: XOR<WorkPlaceNullableRelationFilter, WorkPlaceWhereInput> | null
    group?: XOR<GroupNullableRelationFilter, GroupWhereInput> | null
    tokens?: TokenListRelationFilter
    userInDay?: UserInDayListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    userName?: SortOrderInput | SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    workPlaceId?: SortOrderInput | SortOrder
    groupId?: SortOrderInput | SortOrder
    workPlace?: WorkPlaceOrderByWithRelationInput
    group?: GroupOrderByWithRelationInput
    tokens?: TokenOrderByRelationAggregateInput
    userInDay?: UserInDayOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    userName?: StringNullableFilter<"User"> | string | null
    phoneNumber?: IntNullableFilter<"User"> | number | null
    workPlaceId?: IntNullableFilter<"User"> | number | null
    groupId?: IntNullableFilter<"User"> | number | null
    workPlace?: XOR<WorkPlaceNullableRelationFilter, WorkPlaceWhereInput> | null
    group?: XOR<GroupNullableRelationFilter, GroupWhereInput> | null
    tokens?: TokenListRelationFilter
    userInDay?: UserInDayListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    userName?: SortOrderInput | SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    workPlaceId?: SortOrderInput | SortOrder
    groupId?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    userName?: StringNullableWithAggregatesFilter<"User"> | string | null
    phoneNumber?: IntNullableWithAggregatesFilter<"User"> | number | null
    workPlaceId?: IntNullableWithAggregatesFilter<"User"> | number | null
    groupId?: IntNullableWithAggregatesFilter<"User"> | number | null
  }

  export type TokenWhereInput = {
    AND?: TokenWhereInput | TokenWhereInput[]
    OR?: TokenWhereInput[]
    NOT?: TokenWhereInput | TokenWhereInput[]
    id?: IntFilter<"Token"> | number
    createdAt?: DateTimeFilter<"Token"> | Date | string
    updateAt?: DateTimeFilter<"Token"> | Date | string
    type?: StringFilter<"Token"> | string
    emailToken?: StringNullableFilter<"Token"> | string | null
    valid?: BoolFilter<"Token"> | boolean
    expiration?: DateTimeFilter<"Token"> | Date | string
    userId?: IntFilter<"Token"> | number
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type TokenOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
    type?: SortOrder
    emailToken?: SortOrderInput | SortOrder
    valid?: SortOrder
    expiration?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type TokenWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    emailToken?: string
    AND?: TokenWhereInput | TokenWhereInput[]
    OR?: TokenWhereInput[]
    NOT?: TokenWhereInput | TokenWhereInput[]
    createdAt?: DateTimeFilter<"Token"> | Date | string
    updateAt?: DateTimeFilter<"Token"> | Date | string
    type?: StringFilter<"Token"> | string
    valid?: BoolFilter<"Token"> | boolean
    expiration?: DateTimeFilter<"Token"> | Date | string
    userId?: IntFilter<"Token"> | number
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "emailToken">

  export type TokenOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
    type?: SortOrder
    emailToken?: SortOrderInput | SortOrder
    valid?: SortOrder
    expiration?: SortOrder
    userId?: SortOrder
    _count?: TokenCountOrderByAggregateInput
    _avg?: TokenAvgOrderByAggregateInput
    _max?: TokenMaxOrderByAggregateInput
    _min?: TokenMinOrderByAggregateInput
    _sum?: TokenSumOrderByAggregateInput
  }

  export type TokenScalarWhereWithAggregatesInput = {
    AND?: TokenScalarWhereWithAggregatesInput | TokenScalarWhereWithAggregatesInput[]
    OR?: TokenScalarWhereWithAggregatesInput[]
    NOT?: TokenScalarWhereWithAggregatesInput | TokenScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Token"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Token"> | Date | string
    updateAt?: DateTimeWithAggregatesFilter<"Token"> | Date | string
    type?: StringWithAggregatesFilter<"Token"> | string
    emailToken?: StringNullableWithAggregatesFilter<"Token"> | string | null
    valid?: BoolWithAggregatesFilter<"Token"> | boolean
    expiration?: DateTimeWithAggregatesFilter<"Token"> | Date | string
    userId?: IntWithAggregatesFilter<"Token"> | number
  }

  export type GroupWhereInput = {
    AND?: GroupWhereInput | GroupWhereInput[]
    OR?: GroupWhereInput[]
    NOT?: GroupWhereInput | GroupWhereInput[]
    id?: IntFilter<"Group"> | number
    name?: StringFilter<"Group"> | string
    description?: StringNullableFilter<"Group"> | string | null
    workPlaceId?: IntFilter<"Group"> | number
    workPlace?: XOR<WorkPlaceRelationFilter, WorkPlaceWhereInput>
    users?: UserListRelationFilter
    days?: DayListRelationFilter
  }

  export type GroupOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    workPlaceId?: SortOrder
    workPlace?: WorkPlaceOrderByWithRelationInput
    users?: UserOrderByRelationAggregateInput
    days?: DayOrderByRelationAggregateInput
  }

  export type GroupWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: GroupWhereInput | GroupWhereInput[]
    OR?: GroupWhereInput[]
    NOT?: GroupWhereInput | GroupWhereInput[]
    name?: StringFilter<"Group"> | string
    description?: StringNullableFilter<"Group"> | string | null
    workPlaceId?: IntFilter<"Group"> | number
    workPlace?: XOR<WorkPlaceRelationFilter, WorkPlaceWhereInput>
    users?: UserListRelationFilter
    days?: DayListRelationFilter
  }, "id">

  export type GroupOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    workPlaceId?: SortOrder
    _count?: GroupCountOrderByAggregateInput
    _avg?: GroupAvgOrderByAggregateInput
    _max?: GroupMaxOrderByAggregateInput
    _min?: GroupMinOrderByAggregateInput
    _sum?: GroupSumOrderByAggregateInput
  }

  export type GroupScalarWhereWithAggregatesInput = {
    AND?: GroupScalarWhereWithAggregatesInput | GroupScalarWhereWithAggregatesInput[]
    OR?: GroupScalarWhereWithAggregatesInput[]
    NOT?: GroupScalarWhereWithAggregatesInput | GroupScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Group"> | number
    name?: StringWithAggregatesFilter<"Group"> | string
    description?: StringNullableWithAggregatesFilter<"Group"> | string | null
    workPlaceId?: IntWithAggregatesFilter<"Group"> | number
  }

  export type DayWhereInput = {
    AND?: DayWhereInput | DayWhereInput[]
    OR?: DayWhereInput[]
    NOT?: DayWhereInput | DayWhereInput[]
    id?: IntFilter<"Day"> | number
    date?: StringFilter<"Day"> | string
    groupId?: IntFilter<"Day"> | number
    group?: XOR<GroupRelationFilter, GroupWhereInput>
    usersInDay?: UserInDayListRelationFilter
  }

  export type DayOrderByWithRelationInput = {
    id?: SortOrder
    date?: SortOrder
    groupId?: SortOrder
    group?: GroupOrderByWithRelationInput
    usersInDay?: UserInDayOrderByRelationAggregateInput
  }

  export type DayWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DayWhereInput | DayWhereInput[]
    OR?: DayWhereInput[]
    NOT?: DayWhereInput | DayWhereInput[]
    date?: StringFilter<"Day"> | string
    groupId?: IntFilter<"Day"> | number
    group?: XOR<GroupRelationFilter, GroupWhereInput>
    usersInDay?: UserInDayListRelationFilter
  }, "id">

  export type DayOrderByWithAggregationInput = {
    id?: SortOrder
    date?: SortOrder
    groupId?: SortOrder
    _count?: DayCountOrderByAggregateInput
    _avg?: DayAvgOrderByAggregateInput
    _max?: DayMaxOrderByAggregateInput
    _min?: DayMinOrderByAggregateInput
    _sum?: DaySumOrderByAggregateInput
  }

  export type DayScalarWhereWithAggregatesInput = {
    AND?: DayScalarWhereWithAggregatesInput | DayScalarWhereWithAggregatesInput[]
    OR?: DayScalarWhereWithAggregatesInput[]
    NOT?: DayScalarWhereWithAggregatesInput | DayScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Day"> | number
    date?: StringWithAggregatesFilter<"Day"> | string
    groupId?: IntWithAggregatesFilter<"Day"> | number
  }

  export type UserInDayWhereInput = {
    AND?: UserInDayWhereInput | UserInDayWhereInput[]
    OR?: UserInDayWhereInput[]
    NOT?: UserInDayWhereInput | UserInDayWhereInput[]
    id?: IntFilter<"UserInDay"> | number
    from?: StringFilter<"UserInDay"> | string
    to?: StringFilter<"UserInDay"> | string
    dayId?: IntFilter<"UserInDay"> | number
    userId?: IntFilter<"UserInDay"> | number
    day?: XOR<DayRelationFilter, DayWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type UserInDayOrderByWithRelationInput = {
    id?: SortOrder
    from?: SortOrder
    to?: SortOrder
    dayId?: SortOrder
    userId?: SortOrder
    day?: DayOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type UserInDayWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UserInDayWhereInput | UserInDayWhereInput[]
    OR?: UserInDayWhereInput[]
    NOT?: UserInDayWhereInput | UserInDayWhereInput[]
    from?: StringFilter<"UserInDay"> | string
    to?: StringFilter<"UserInDay"> | string
    dayId?: IntFilter<"UserInDay"> | number
    userId?: IntFilter<"UserInDay"> | number
    day?: XOR<DayRelationFilter, DayWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type UserInDayOrderByWithAggregationInput = {
    id?: SortOrder
    from?: SortOrder
    to?: SortOrder
    dayId?: SortOrder
    userId?: SortOrder
    _count?: UserInDayCountOrderByAggregateInput
    _avg?: UserInDayAvgOrderByAggregateInput
    _max?: UserInDayMaxOrderByAggregateInput
    _min?: UserInDayMinOrderByAggregateInput
    _sum?: UserInDaySumOrderByAggregateInput
  }

  export type UserInDayScalarWhereWithAggregatesInput = {
    AND?: UserInDayScalarWhereWithAggregatesInput | UserInDayScalarWhereWithAggregatesInput[]
    OR?: UserInDayScalarWhereWithAggregatesInput[]
    NOT?: UserInDayScalarWhereWithAggregatesInput | UserInDayScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserInDay"> | number
    from?: StringWithAggregatesFilter<"UserInDay"> | string
    to?: StringWithAggregatesFilter<"UserInDay"> | string
    dayId?: IntWithAggregatesFilter<"UserInDay"> | number
    userId?: IntWithAggregatesFilter<"UserInDay"> | number
  }

  export type WorkPlaceWhereInput = {
    AND?: WorkPlaceWhereInput | WorkPlaceWhereInput[]
    OR?: WorkPlaceWhereInput[]
    NOT?: WorkPlaceWhereInput | WorkPlaceWhereInput[]
    id?: IntFilter<"WorkPlace"> | number
    name?: StringNullableFilter<"WorkPlace"> | string | null
    adminId?: StringNullableFilter<"WorkPlace"> | string | null
    users?: UserListRelationFilter
    groups?: GroupListRelationFilter
  }

  export type WorkPlaceOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    adminId?: SortOrderInput | SortOrder
    users?: UserOrderByRelationAggregateInput
    groups?: GroupOrderByRelationAggregateInput
  }

  export type WorkPlaceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: WorkPlaceWhereInput | WorkPlaceWhereInput[]
    OR?: WorkPlaceWhereInput[]
    NOT?: WorkPlaceWhereInput | WorkPlaceWhereInput[]
    name?: StringNullableFilter<"WorkPlace"> | string | null
    adminId?: StringNullableFilter<"WorkPlace"> | string | null
    users?: UserListRelationFilter
    groups?: GroupListRelationFilter
  }, "id">

  export type WorkPlaceOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    adminId?: SortOrderInput | SortOrder
    _count?: WorkPlaceCountOrderByAggregateInput
    _avg?: WorkPlaceAvgOrderByAggregateInput
    _max?: WorkPlaceMaxOrderByAggregateInput
    _min?: WorkPlaceMinOrderByAggregateInput
    _sum?: WorkPlaceSumOrderByAggregateInput
  }

  export type WorkPlaceScalarWhereWithAggregatesInput = {
    AND?: WorkPlaceScalarWhereWithAggregatesInput | WorkPlaceScalarWhereWithAggregatesInput[]
    OR?: WorkPlaceScalarWhereWithAggregatesInput[]
    NOT?: WorkPlaceScalarWhereWithAggregatesInput | WorkPlaceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"WorkPlace"> | number
    name?: StringNullableWithAggregatesFilter<"WorkPlace"> | string | null
    adminId?: StringNullableWithAggregatesFilter<"WorkPlace"> | string | null
  }

  export type UserCreateInput = {
    email?: string | null
    name?: string | null
    userName?: string | null
    phoneNumber?: number | null
    workPlace?: WorkPlaceCreateNestedOneWithoutUsersInput
    group?: GroupCreateNestedOneWithoutUsersInput
    tokens?: TokenCreateNestedManyWithoutUserInput
    userInDay?: UserInDayCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email?: string | null
    name?: string | null
    userName?: string | null
    phoneNumber?: number | null
    workPlaceId?: number | null
    groupId?: number | null
    tokens?: TokenUncheckedCreateNestedManyWithoutUserInput
    userInDay?: UserInDayUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableIntFieldUpdateOperationsInput | number | null
    workPlace?: WorkPlaceUpdateOneWithoutUsersNestedInput
    group?: GroupUpdateOneWithoutUsersNestedInput
    tokens?: TokenUpdateManyWithoutUserNestedInput
    userInDay?: UserInDayUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableIntFieldUpdateOperationsInput | number | null
    workPlaceId?: NullableIntFieldUpdateOperationsInput | number | null
    groupId?: NullableIntFieldUpdateOperationsInput | number | null
    tokens?: TokenUncheckedUpdateManyWithoutUserNestedInput
    userInDay?: UserInDayUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    email?: string | null
    name?: string | null
    userName?: string | null
    phoneNumber?: number | null
    workPlaceId?: number | null
    groupId?: number | null
  }

  export type UserUpdateManyMutationInput = {
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableIntFieldUpdateOperationsInput | number | null
    workPlaceId?: NullableIntFieldUpdateOperationsInput | number | null
    groupId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TokenCreateInput = {
    createdAt?: Date | string
    updateAt?: Date | string
    type: string
    emailToken?: string | null
    valid?: boolean
    expiration: Date | string
    user: UserCreateNestedOneWithoutTokensInput
  }

  export type TokenUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    updateAt?: Date | string
    type: string
    emailToken?: string | null
    valid?: boolean
    expiration: Date | string
    userId: number
  }

  export type TokenUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    emailToken?: NullableStringFieldUpdateOperationsInput | string | null
    valid?: BoolFieldUpdateOperationsInput | boolean
    expiration?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTokensNestedInput
  }

  export type TokenUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    emailToken?: NullableStringFieldUpdateOperationsInput | string | null
    valid?: BoolFieldUpdateOperationsInput | boolean
    expiration?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type TokenCreateManyInput = {
    id?: number
    createdAt?: Date | string
    updateAt?: Date | string
    type: string
    emailToken?: string | null
    valid?: boolean
    expiration: Date | string
    userId: number
  }

  export type TokenUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    emailToken?: NullableStringFieldUpdateOperationsInput | string | null
    valid?: BoolFieldUpdateOperationsInput | boolean
    expiration?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    emailToken?: NullableStringFieldUpdateOperationsInput | string | null
    valid?: BoolFieldUpdateOperationsInput | boolean
    expiration?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type GroupCreateInput = {
    name: string
    description?: string | null
    workPlace: WorkPlaceCreateNestedOneWithoutGroupsInput
    users?: UserCreateNestedManyWithoutGroupInput
    days?: DayCreateNestedManyWithoutGroupInput
  }

  export type GroupUncheckedCreateInput = {
    id?: number
    name: string
    description?: string | null
    workPlaceId: number
    users?: UserUncheckedCreateNestedManyWithoutGroupInput
    days?: DayUncheckedCreateNestedManyWithoutGroupInput
  }

  export type GroupUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    workPlace?: WorkPlaceUpdateOneRequiredWithoutGroupsNestedInput
    users?: UserUpdateManyWithoutGroupNestedInput
    days?: DayUpdateManyWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    workPlaceId?: IntFieldUpdateOperationsInput | number
    users?: UserUncheckedUpdateManyWithoutGroupNestedInput
    days?: DayUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type GroupCreateManyInput = {
    id?: number
    name: string
    description?: string | null
    workPlaceId: number
  }

  export type GroupUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GroupUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    workPlaceId?: IntFieldUpdateOperationsInput | number
  }

  export type DayCreateInput = {
    date: string
    group: GroupCreateNestedOneWithoutDaysInput
    usersInDay?: UserInDayCreateNestedManyWithoutDayInput
  }

  export type DayUncheckedCreateInput = {
    id?: number
    date: string
    groupId: number
    usersInDay?: UserInDayUncheckedCreateNestedManyWithoutDayInput
  }

  export type DayUpdateInput = {
    date?: StringFieldUpdateOperationsInput | string
    group?: GroupUpdateOneRequiredWithoutDaysNestedInput
    usersInDay?: UserInDayUpdateManyWithoutDayNestedInput
  }

  export type DayUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: StringFieldUpdateOperationsInput | string
    groupId?: IntFieldUpdateOperationsInput | number
    usersInDay?: UserInDayUncheckedUpdateManyWithoutDayNestedInput
  }

  export type DayCreateManyInput = {
    id?: number
    date: string
    groupId: number
  }

  export type DayUpdateManyMutationInput = {
    date?: StringFieldUpdateOperationsInput | string
  }

  export type DayUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: StringFieldUpdateOperationsInput | string
    groupId?: IntFieldUpdateOperationsInput | number
  }

  export type UserInDayCreateInput = {
    from: string
    to: string
    day: DayCreateNestedOneWithoutUsersInDayInput
    user: UserCreateNestedOneWithoutUserInDayInput
  }

  export type UserInDayUncheckedCreateInput = {
    id?: number
    from: string
    to: string
    dayId: number
    userId: number
  }

  export type UserInDayUpdateInput = {
    from?: StringFieldUpdateOperationsInput | string
    to?: StringFieldUpdateOperationsInput | string
    day?: DayUpdateOneRequiredWithoutUsersInDayNestedInput
    user?: UserUpdateOneRequiredWithoutUserInDayNestedInput
  }

  export type UserInDayUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    from?: StringFieldUpdateOperationsInput | string
    to?: StringFieldUpdateOperationsInput | string
    dayId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type UserInDayCreateManyInput = {
    id?: number
    from: string
    to: string
    dayId: number
    userId: number
  }

  export type UserInDayUpdateManyMutationInput = {
    from?: StringFieldUpdateOperationsInput | string
    to?: StringFieldUpdateOperationsInput | string
  }

  export type UserInDayUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    from?: StringFieldUpdateOperationsInput | string
    to?: StringFieldUpdateOperationsInput | string
    dayId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type WorkPlaceCreateInput = {
    name?: string | null
    adminId?: string | null
    users?: UserCreateNestedManyWithoutWorkPlaceInput
    groups?: GroupCreateNestedManyWithoutWorkPlaceInput
  }

  export type WorkPlaceUncheckedCreateInput = {
    id?: number
    name?: string | null
    adminId?: string | null
    users?: UserUncheckedCreateNestedManyWithoutWorkPlaceInput
    groups?: GroupUncheckedCreateNestedManyWithoutWorkPlaceInput
  }

  export type WorkPlaceUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    adminId?: NullableStringFieldUpdateOperationsInput | string | null
    users?: UserUpdateManyWithoutWorkPlaceNestedInput
    groups?: GroupUpdateManyWithoutWorkPlaceNestedInput
  }

  export type WorkPlaceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    adminId?: NullableStringFieldUpdateOperationsInput | string | null
    users?: UserUncheckedUpdateManyWithoutWorkPlaceNestedInput
    groups?: GroupUncheckedUpdateManyWithoutWorkPlaceNestedInput
  }

  export type WorkPlaceCreateManyInput = {
    id?: number
    name?: string | null
    adminId?: string | null
  }

  export type WorkPlaceUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    adminId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WorkPlaceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    adminId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type WorkPlaceNullableRelationFilter = {
    is?: WorkPlaceWhereInput | null
    isNot?: WorkPlaceWhereInput | null
  }

  export type GroupNullableRelationFilter = {
    is?: GroupWhereInput | null
    isNot?: GroupWhereInput | null
  }

  export type TokenListRelationFilter = {
    every?: TokenWhereInput
    some?: TokenWhereInput
    none?: TokenWhereInput
  }

  export type UserInDayListRelationFilter = {
    every?: UserInDayWhereInput
    some?: UserInDayWhereInput
    none?: UserInDayWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TokenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserInDayOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    userName?: SortOrder
    phoneNumber?: SortOrder
    workPlaceId?: SortOrder
    groupId?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    phoneNumber?: SortOrder
    workPlaceId?: SortOrder
    groupId?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    userName?: SortOrder
    phoneNumber?: SortOrder
    workPlaceId?: SortOrder
    groupId?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    userName?: SortOrder
    phoneNumber?: SortOrder
    workPlaceId?: SortOrder
    groupId?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    phoneNumber?: SortOrder
    workPlaceId?: SortOrder
    groupId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type TokenCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
    type?: SortOrder
    emailToken?: SortOrder
    valid?: SortOrder
    expiration?: SortOrder
    userId?: SortOrder
  }

  export type TokenAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type TokenMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
    type?: SortOrder
    emailToken?: SortOrder
    valid?: SortOrder
    expiration?: SortOrder
    userId?: SortOrder
  }

  export type TokenMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
    type?: SortOrder
    emailToken?: SortOrder
    valid?: SortOrder
    expiration?: SortOrder
    userId?: SortOrder
  }

  export type TokenSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type WorkPlaceRelationFilter = {
    is?: WorkPlaceWhereInput
    isNot?: WorkPlaceWhereInput
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type DayListRelationFilter = {
    every?: DayWhereInput
    some?: DayWhereInput
    none?: DayWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DayOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GroupCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    workPlaceId?: SortOrder
  }

  export type GroupAvgOrderByAggregateInput = {
    id?: SortOrder
    workPlaceId?: SortOrder
  }

  export type GroupMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    workPlaceId?: SortOrder
  }

  export type GroupMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    workPlaceId?: SortOrder
  }

  export type GroupSumOrderByAggregateInput = {
    id?: SortOrder
    workPlaceId?: SortOrder
  }

  export type GroupRelationFilter = {
    is?: GroupWhereInput
    isNot?: GroupWhereInput
  }

  export type DayCountOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    groupId?: SortOrder
  }

  export type DayAvgOrderByAggregateInput = {
    id?: SortOrder
    groupId?: SortOrder
  }

  export type DayMaxOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    groupId?: SortOrder
  }

  export type DayMinOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    groupId?: SortOrder
  }

  export type DaySumOrderByAggregateInput = {
    id?: SortOrder
    groupId?: SortOrder
  }

  export type DayRelationFilter = {
    is?: DayWhereInput
    isNot?: DayWhereInput
  }

  export type UserInDayCountOrderByAggregateInput = {
    id?: SortOrder
    from?: SortOrder
    to?: SortOrder
    dayId?: SortOrder
    userId?: SortOrder
  }

  export type UserInDayAvgOrderByAggregateInput = {
    id?: SortOrder
    dayId?: SortOrder
    userId?: SortOrder
  }

  export type UserInDayMaxOrderByAggregateInput = {
    id?: SortOrder
    from?: SortOrder
    to?: SortOrder
    dayId?: SortOrder
    userId?: SortOrder
  }

  export type UserInDayMinOrderByAggregateInput = {
    id?: SortOrder
    from?: SortOrder
    to?: SortOrder
    dayId?: SortOrder
    userId?: SortOrder
  }

  export type UserInDaySumOrderByAggregateInput = {
    id?: SortOrder
    dayId?: SortOrder
    userId?: SortOrder
  }

  export type GroupListRelationFilter = {
    every?: GroupWhereInput
    some?: GroupWhereInput
    none?: GroupWhereInput
  }

  export type GroupOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WorkPlaceCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    adminId?: SortOrder
  }

  export type WorkPlaceAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type WorkPlaceMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    adminId?: SortOrder
  }

  export type WorkPlaceMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    adminId?: SortOrder
  }

  export type WorkPlaceSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type WorkPlaceCreateNestedOneWithoutUsersInput = {
    create?: XOR<WorkPlaceCreateWithoutUsersInput, WorkPlaceUncheckedCreateWithoutUsersInput>
    connectOrCreate?: WorkPlaceCreateOrConnectWithoutUsersInput
    connect?: WorkPlaceWhereUniqueInput
  }

  export type GroupCreateNestedOneWithoutUsersInput = {
    create?: XOR<GroupCreateWithoutUsersInput, GroupUncheckedCreateWithoutUsersInput>
    connectOrCreate?: GroupCreateOrConnectWithoutUsersInput
    connect?: GroupWhereUniqueInput
  }

  export type TokenCreateNestedManyWithoutUserInput = {
    create?: XOR<TokenCreateWithoutUserInput, TokenUncheckedCreateWithoutUserInput> | TokenCreateWithoutUserInput[] | TokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TokenCreateOrConnectWithoutUserInput | TokenCreateOrConnectWithoutUserInput[]
    createMany?: TokenCreateManyUserInputEnvelope
    connect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
  }

  export type UserInDayCreateNestedManyWithoutUserInput = {
    create?: XOR<UserInDayCreateWithoutUserInput, UserInDayUncheckedCreateWithoutUserInput> | UserInDayCreateWithoutUserInput[] | UserInDayUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserInDayCreateOrConnectWithoutUserInput | UserInDayCreateOrConnectWithoutUserInput[]
    createMany?: UserInDayCreateManyUserInputEnvelope
    connect?: UserInDayWhereUniqueInput | UserInDayWhereUniqueInput[]
  }

  export type TokenUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TokenCreateWithoutUserInput, TokenUncheckedCreateWithoutUserInput> | TokenCreateWithoutUserInput[] | TokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TokenCreateOrConnectWithoutUserInput | TokenCreateOrConnectWithoutUserInput[]
    createMany?: TokenCreateManyUserInputEnvelope
    connect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
  }

  export type UserInDayUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserInDayCreateWithoutUserInput, UserInDayUncheckedCreateWithoutUserInput> | UserInDayCreateWithoutUserInput[] | UserInDayUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserInDayCreateOrConnectWithoutUserInput | UserInDayCreateOrConnectWithoutUserInput[]
    createMany?: UserInDayCreateManyUserInputEnvelope
    connect?: UserInDayWhereUniqueInput | UserInDayWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type WorkPlaceUpdateOneWithoutUsersNestedInput = {
    create?: XOR<WorkPlaceCreateWithoutUsersInput, WorkPlaceUncheckedCreateWithoutUsersInput>
    connectOrCreate?: WorkPlaceCreateOrConnectWithoutUsersInput
    upsert?: WorkPlaceUpsertWithoutUsersInput
    disconnect?: WorkPlaceWhereInput | boolean
    delete?: WorkPlaceWhereInput | boolean
    connect?: WorkPlaceWhereUniqueInput
    update?: XOR<XOR<WorkPlaceUpdateToOneWithWhereWithoutUsersInput, WorkPlaceUpdateWithoutUsersInput>, WorkPlaceUncheckedUpdateWithoutUsersInput>
  }

  export type GroupUpdateOneWithoutUsersNestedInput = {
    create?: XOR<GroupCreateWithoutUsersInput, GroupUncheckedCreateWithoutUsersInput>
    connectOrCreate?: GroupCreateOrConnectWithoutUsersInput
    upsert?: GroupUpsertWithoutUsersInput
    disconnect?: GroupWhereInput | boolean
    delete?: GroupWhereInput | boolean
    connect?: GroupWhereUniqueInput
    update?: XOR<XOR<GroupUpdateToOneWithWhereWithoutUsersInput, GroupUpdateWithoutUsersInput>, GroupUncheckedUpdateWithoutUsersInput>
  }

  export type TokenUpdateManyWithoutUserNestedInput = {
    create?: XOR<TokenCreateWithoutUserInput, TokenUncheckedCreateWithoutUserInput> | TokenCreateWithoutUserInput[] | TokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TokenCreateOrConnectWithoutUserInput | TokenCreateOrConnectWithoutUserInput[]
    upsert?: TokenUpsertWithWhereUniqueWithoutUserInput | TokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TokenCreateManyUserInputEnvelope
    set?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    disconnect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    delete?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    connect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    update?: TokenUpdateWithWhereUniqueWithoutUserInput | TokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TokenUpdateManyWithWhereWithoutUserInput | TokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TokenScalarWhereInput | TokenScalarWhereInput[]
  }

  export type UserInDayUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserInDayCreateWithoutUserInput, UserInDayUncheckedCreateWithoutUserInput> | UserInDayCreateWithoutUserInput[] | UserInDayUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserInDayCreateOrConnectWithoutUserInput | UserInDayCreateOrConnectWithoutUserInput[]
    upsert?: UserInDayUpsertWithWhereUniqueWithoutUserInput | UserInDayUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserInDayCreateManyUserInputEnvelope
    set?: UserInDayWhereUniqueInput | UserInDayWhereUniqueInput[]
    disconnect?: UserInDayWhereUniqueInput | UserInDayWhereUniqueInput[]
    delete?: UserInDayWhereUniqueInput | UserInDayWhereUniqueInput[]
    connect?: UserInDayWhereUniqueInput | UserInDayWhereUniqueInput[]
    update?: UserInDayUpdateWithWhereUniqueWithoutUserInput | UserInDayUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserInDayUpdateManyWithWhereWithoutUserInput | UserInDayUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserInDayScalarWhereInput | UserInDayScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TokenUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TokenCreateWithoutUserInput, TokenUncheckedCreateWithoutUserInput> | TokenCreateWithoutUserInput[] | TokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TokenCreateOrConnectWithoutUserInput | TokenCreateOrConnectWithoutUserInput[]
    upsert?: TokenUpsertWithWhereUniqueWithoutUserInput | TokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TokenCreateManyUserInputEnvelope
    set?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    disconnect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    delete?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    connect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    update?: TokenUpdateWithWhereUniqueWithoutUserInput | TokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TokenUpdateManyWithWhereWithoutUserInput | TokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TokenScalarWhereInput | TokenScalarWhereInput[]
  }

  export type UserInDayUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserInDayCreateWithoutUserInput, UserInDayUncheckedCreateWithoutUserInput> | UserInDayCreateWithoutUserInput[] | UserInDayUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserInDayCreateOrConnectWithoutUserInput | UserInDayCreateOrConnectWithoutUserInput[]
    upsert?: UserInDayUpsertWithWhereUniqueWithoutUserInput | UserInDayUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserInDayCreateManyUserInputEnvelope
    set?: UserInDayWhereUniqueInput | UserInDayWhereUniqueInput[]
    disconnect?: UserInDayWhereUniqueInput | UserInDayWhereUniqueInput[]
    delete?: UserInDayWhereUniqueInput | UserInDayWhereUniqueInput[]
    connect?: UserInDayWhereUniqueInput | UserInDayWhereUniqueInput[]
    update?: UserInDayUpdateWithWhereUniqueWithoutUserInput | UserInDayUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserInDayUpdateManyWithWhereWithoutUserInput | UserInDayUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserInDayScalarWhereInput | UserInDayScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutTokensInput = {
    create?: XOR<UserCreateWithoutTokensInput, UserUncheckedCreateWithoutTokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutTokensInput
    connect?: UserWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutTokensNestedInput = {
    create?: XOR<UserCreateWithoutTokensInput, UserUncheckedCreateWithoutTokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutTokensInput
    upsert?: UserUpsertWithoutTokensInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTokensInput, UserUpdateWithoutTokensInput>, UserUncheckedUpdateWithoutTokensInput>
  }

  export type WorkPlaceCreateNestedOneWithoutGroupsInput = {
    create?: XOR<WorkPlaceCreateWithoutGroupsInput, WorkPlaceUncheckedCreateWithoutGroupsInput>
    connectOrCreate?: WorkPlaceCreateOrConnectWithoutGroupsInput
    connect?: WorkPlaceWhereUniqueInput
  }

  export type UserCreateNestedManyWithoutGroupInput = {
    create?: XOR<UserCreateWithoutGroupInput, UserUncheckedCreateWithoutGroupInput> | UserCreateWithoutGroupInput[] | UserUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: UserCreateOrConnectWithoutGroupInput | UserCreateOrConnectWithoutGroupInput[]
    createMany?: UserCreateManyGroupInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type DayCreateNestedManyWithoutGroupInput = {
    create?: XOR<DayCreateWithoutGroupInput, DayUncheckedCreateWithoutGroupInput> | DayCreateWithoutGroupInput[] | DayUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: DayCreateOrConnectWithoutGroupInput | DayCreateOrConnectWithoutGroupInput[]
    createMany?: DayCreateManyGroupInputEnvelope
    connect?: DayWhereUniqueInput | DayWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutGroupInput = {
    create?: XOR<UserCreateWithoutGroupInput, UserUncheckedCreateWithoutGroupInput> | UserCreateWithoutGroupInput[] | UserUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: UserCreateOrConnectWithoutGroupInput | UserCreateOrConnectWithoutGroupInput[]
    createMany?: UserCreateManyGroupInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type DayUncheckedCreateNestedManyWithoutGroupInput = {
    create?: XOR<DayCreateWithoutGroupInput, DayUncheckedCreateWithoutGroupInput> | DayCreateWithoutGroupInput[] | DayUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: DayCreateOrConnectWithoutGroupInput | DayCreateOrConnectWithoutGroupInput[]
    createMany?: DayCreateManyGroupInputEnvelope
    connect?: DayWhereUniqueInput | DayWhereUniqueInput[]
  }

  export type WorkPlaceUpdateOneRequiredWithoutGroupsNestedInput = {
    create?: XOR<WorkPlaceCreateWithoutGroupsInput, WorkPlaceUncheckedCreateWithoutGroupsInput>
    connectOrCreate?: WorkPlaceCreateOrConnectWithoutGroupsInput
    upsert?: WorkPlaceUpsertWithoutGroupsInput
    connect?: WorkPlaceWhereUniqueInput
    update?: XOR<XOR<WorkPlaceUpdateToOneWithWhereWithoutGroupsInput, WorkPlaceUpdateWithoutGroupsInput>, WorkPlaceUncheckedUpdateWithoutGroupsInput>
  }

  export type UserUpdateManyWithoutGroupNestedInput = {
    create?: XOR<UserCreateWithoutGroupInput, UserUncheckedCreateWithoutGroupInput> | UserCreateWithoutGroupInput[] | UserUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: UserCreateOrConnectWithoutGroupInput | UserCreateOrConnectWithoutGroupInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutGroupInput | UserUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: UserCreateManyGroupInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutGroupInput | UserUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: UserUpdateManyWithWhereWithoutGroupInput | UserUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type DayUpdateManyWithoutGroupNestedInput = {
    create?: XOR<DayCreateWithoutGroupInput, DayUncheckedCreateWithoutGroupInput> | DayCreateWithoutGroupInput[] | DayUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: DayCreateOrConnectWithoutGroupInput | DayCreateOrConnectWithoutGroupInput[]
    upsert?: DayUpsertWithWhereUniqueWithoutGroupInput | DayUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: DayCreateManyGroupInputEnvelope
    set?: DayWhereUniqueInput | DayWhereUniqueInput[]
    disconnect?: DayWhereUniqueInput | DayWhereUniqueInput[]
    delete?: DayWhereUniqueInput | DayWhereUniqueInput[]
    connect?: DayWhereUniqueInput | DayWhereUniqueInput[]
    update?: DayUpdateWithWhereUniqueWithoutGroupInput | DayUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: DayUpdateManyWithWhereWithoutGroupInput | DayUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: DayScalarWhereInput | DayScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutGroupNestedInput = {
    create?: XOR<UserCreateWithoutGroupInput, UserUncheckedCreateWithoutGroupInput> | UserCreateWithoutGroupInput[] | UserUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: UserCreateOrConnectWithoutGroupInput | UserCreateOrConnectWithoutGroupInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutGroupInput | UserUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: UserCreateManyGroupInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutGroupInput | UserUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: UserUpdateManyWithWhereWithoutGroupInput | UserUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type DayUncheckedUpdateManyWithoutGroupNestedInput = {
    create?: XOR<DayCreateWithoutGroupInput, DayUncheckedCreateWithoutGroupInput> | DayCreateWithoutGroupInput[] | DayUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: DayCreateOrConnectWithoutGroupInput | DayCreateOrConnectWithoutGroupInput[]
    upsert?: DayUpsertWithWhereUniqueWithoutGroupInput | DayUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: DayCreateManyGroupInputEnvelope
    set?: DayWhereUniqueInput | DayWhereUniqueInput[]
    disconnect?: DayWhereUniqueInput | DayWhereUniqueInput[]
    delete?: DayWhereUniqueInput | DayWhereUniqueInput[]
    connect?: DayWhereUniqueInput | DayWhereUniqueInput[]
    update?: DayUpdateWithWhereUniqueWithoutGroupInput | DayUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: DayUpdateManyWithWhereWithoutGroupInput | DayUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: DayScalarWhereInput | DayScalarWhereInput[]
  }

  export type GroupCreateNestedOneWithoutDaysInput = {
    create?: XOR<GroupCreateWithoutDaysInput, GroupUncheckedCreateWithoutDaysInput>
    connectOrCreate?: GroupCreateOrConnectWithoutDaysInput
    connect?: GroupWhereUniqueInput
  }

  export type UserInDayCreateNestedManyWithoutDayInput = {
    create?: XOR<UserInDayCreateWithoutDayInput, UserInDayUncheckedCreateWithoutDayInput> | UserInDayCreateWithoutDayInput[] | UserInDayUncheckedCreateWithoutDayInput[]
    connectOrCreate?: UserInDayCreateOrConnectWithoutDayInput | UserInDayCreateOrConnectWithoutDayInput[]
    createMany?: UserInDayCreateManyDayInputEnvelope
    connect?: UserInDayWhereUniqueInput | UserInDayWhereUniqueInput[]
  }

  export type UserInDayUncheckedCreateNestedManyWithoutDayInput = {
    create?: XOR<UserInDayCreateWithoutDayInput, UserInDayUncheckedCreateWithoutDayInput> | UserInDayCreateWithoutDayInput[] | UserInDayUncheckedCreateWithoutDayInput[]
    connectOrCreate?: UserInDayCreateOrConnectWithoutDayInput | UserInDayCreateOrConnectWithoutDayInput[]
    createMany?: UserInDayCreateManyDayInputEnvelope
    connect?: UserInDayWhereUniqueInput | UserInDayWhereUniqueInput[]
  }

  export type GroupUpdateOneRequiredWithoutDaysNestedInput = {
    create?: XOR<GroupCreateWithoutDaysInput, GroupUncheckedCreateWithoutDaysInput>
    connectOrCreate?: GroupCreateOrConnectWithoutDaysInput
    upsert?: GroupUpsertWithoutDaysInput
    connect?: GroupWhereUniqueInput
    update?: XOR<XOR<GroupUpdateToOneWithWhereWithoutDaysInput, GroupUpdateWithoutDaysInput>, GroupUncheckedUpdateWithoutDaysInput>
  }

  export type UserInDayUpdateManyWithoutDayNestedInput = {
    create?: XOR<UserInDayCreateWithoutDayInput, UserInDayUncheckedCreateWithoutDayInput> | UserInDayCreateWithoutDayInput[] | UserInDayUncheckedCreateWithoutDayInput[]
    connectOrCreate?: UserInDayCreateOrConnectWithoutDayInput | UserInDayCreateOrConnectWithoutDayInput[]
    upsert?: UserInDayUpsertWithWhereUniqueWithoutDayInput | UserInDayUpsertWithWhereUniqueWithoutDayInput[]
    createMany?: UserInDayCreateManyDayInputEnvelope
    set?: UserInDayWhereUniqueInput | UserInDayWhereUniqueInput[]
    disconnect?: UserInDayWhereUniqueInput | UserInDayWhereUniqueInput[]
    delete?: UserInDayWhereUniqueInput | UserInDayWhereUniqueInput[]
    connect?: UserInDayWhereUniqueInput | UserInDayWhereUniqueInput[]
    update?: UserInDayUpdateWithWhereUniqueWithoutDayInput | UserInDayUpdateWithWhereUniqueWithoutDayInput[]
    updateMany?: UserInDayUpdateManyWithWhereWithoutDayInput | UserInDayUpdateManyWithWhereWithoutDayInput[]
    deleteMany?: UserInDayScalarWhereInput | UserInDayScalarWhereInput[]
  }

  export type UserInDayUncheckedUpdateManyWithoutDayNestedInput = {
    create?: XOR<UserInDayCreateWithoutDayInput, UserInDayUncheckedCreateWithoutDayInput> | UserInDayCreateWithoutDayInput[] | UserInDayUncheckedCreateWithoutDayInput[]
    connectOrCreate?: UserInDayCreateOrConnectWithoutDayInput | UserInDayCreateOrConnectWithoutDayInput[]
    upsert?: UserInDayUpsertWithWhereUniqueWithoutDayInput | UserInDayUpsertWithWhereUniqueWithoutDayInput[]
    createMany?: UserInDayCreateManyDayInputEnvelope
    set?: UserInDayWhereUniqueInput | UserInDayWhereUniqueInput[]
    disconnect?: UserInDayWhereUniqueInput | UserInDayWhereUniqueInput[]
    delete?: UserInDayWhereUniqueInput | UserInDayWhereUniqueInput[]
    connect?: UserInDayWhereUniqueInput | UserInDayWhereUniqueInput[]
    update?: UserInDayUpdateWithWhereUniqueWithoutDayInput | UserInDayUpdateWithWhereUniqueWithoutDayInput[]
    updateMany?: UserInDayUpdateManyWithWhereWithoutDayInput | UserInDayUpdateManyWithWhereWithoutDayInput[]
    deleteMany?: UserInDayScalarWhereInput | UserInDayScalarWhereInput[]
  }

  export type DayCreateNestedOneWithoutUsersInDayInput = {
    create?: XOR<DayCreateWithoutUsersInDayInput, DayUncheckedCreateWithoutUsersInDayInput>
    connectOrCreate?: DayCreateOrConnectWithoutUsersInDayInput
    connect?: DayWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutUserInDayInput = {
    create?: XOR<UserCreateWithoutUserInDayInput, UserUncheckedCreateWithoutUserInDayInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserInDayInput
    connect?: UserWhereUniqueInput
  }

  export type DayUpdateOneRequiredWithoutUsersInDayNestedInput = {
    create?: XOR<DayCreateWithoutUsersInDayInput, DayUncheckedCreateWithoutUsersInDayInput>
    connectOrCreate?: DayCreateOrConnectWithoutUsersInDayInput
    upsert?: DayUpsertWithoutUsersInDayInput
    connect?: DayWhereUniqueInput
    update?: XOR<XOR<DayUpdateToOneWithWhereWithoutUsersInDayInput, DayUpdateWithoutUsersInDayInput>, DayUncheckedUpdateWithoutUsersInDayInput>
  }

  export type UserUpdateOneRequiredWithoutUserInDayNestedInput = {
    create?: XOR<UserCreateWithoutUserInDayInput, UserUncheckedCreateWithoutUserInDayInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserInDayInput
    upsert?: UserUpsertWithoutUserInDayInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserInDayInput, UserUpdateWithoutUserInDayInput>, UserUncheckedUpdateWithoutUserInDayInput>
  }

  export type UserCreateNestedManyWithoutWorkPlaceInput = {
    create?: XOR<UserCreateWithoutWorkPlaceInput, UserUncheckedCreateWithoutWorkPlaceInput> | UserCreateWithoutWorkPlaceInput[] | UserUncheckedCreateWithoutWorkPlaceInput[]
    connectOrCreate?: UserCreateOrConnectWithoutWorkPlaceInput | UserCreateOrConnectWithoutWorkPlaceInput[]
    createMany?: UserCreateManyWorkPlaceInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type GroupCreateNestedManyWithoutWorkPlaceInput = {
    create?: XOR<GroupCreateWithoutWorkPlaceInput, GroupUncheckedCreateWithoutWorkPlaceInput> | GroupCreateWithoutWorkPlaceInput[] | GroupUncheckedCreateWithoutWorkPlaceInput[]
    connectOrCreate?: GroupCreateOrConnectWithoutWorkPlaceInput | GroupCreateOrConnectWithoutWorkPlaceInput[]
    createMany?: GroupCreateManyWorkPlaceInputEnvelope
    connect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutWorkPlaceInput = {
    create?: XOR<UserCreateWithoutWorkPlaceInput, UserUncheckedCreateWithoutWorkPlaceInput> | UserCreateWithoutWorkPlaceInput[] | UserUncheckedCreateWithoutWorkPlaceInput[]
    connectOrCreate?: UserCreateOrConnectWithoutWorkPlaceInput | UserCreateOrConnectWithoutWorkPlaceInput[]
    createMany?: UserCreateManyWorkPlaceInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type GroupUncheckedCreateNestedManyWithoutWorkPlaceInput = {
    create?: XOR<GroupCreateWithoutWorkPlaceInput, GroupUncheckedCreateWithoutWorkPlaceInput> | GroupCreateWithoutWorkPlaceInput[] | GroupUncheckedCreateWithoutWorkPlaceInput[]
    connectOrCreate?: GroupCreateOrConnectWithoutWorkPlaceInput | GroupCreateOrConnectWithoutWorkPlaceInput[]
    createMany?: GroupCreateManyWorkPlaceInputEnvelope
    connect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
  }

  export type UserUpdateManyWithoutWorkPlaceNestedInput = {
    create?: XOR<UserCreateWithoutWorkPlaceInput, UserUncheckedCreateWithoutWorkPlaceInput> | UserCreateWithoutWorkPlaceInput[] | UserUncheckedCreateWithoutWorkPlaceInput[]
    connectOrCreate?: UserCreateOrConnectWithoutWorkPlaceInput | UserCreateOrConnectWithoutWorkPlaceInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutWorkPlaceInput | UserUpsertWithWhereUniqueWithoutWorkPlaceInput[]
    createMany?: UserCreateManyWorkPlaceInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutWorkPlaceInput | UserUpdateWithWhereUniqueWithoutWorkPlaceInput[]
    updateMany?: UserUpdateManyWithWhereWithoutWorkPlaceInput | UserUpdateManyWithWhereWithoutWorkPlaceInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type GroupUpdateManyWithoutWorkPlaceNestedInput = {
    create?: XOR<GroupCreateWithoutWorkPlaceInput, GroupUncheckedCreateWithoutWorkPlaceInput> | GroupCreateWithoutWorkPlaceInput[] | GroupUncheckedCreateWithoutWorkPlaceInput[]
    connectOrCreate?: GroupCreateOrConnectWithoutWorkPlaceInput | GroupCreateOrConnectWithoutWorkPlaceInput[]
    upsert?: GroupUpsertWithWhereUniqueWithoutWorkPlaceInput | GroupUpsertWithWhereUniqueWithoutWorkPlaceInput[]
    createMany?: GroupCreateManyWorkPlaceInputEnvelope
    set?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    disconnect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    delete?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    connect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    update?: GroupUpdateWithWhereUniqueWithoutWorkPlaceInput | GroupUpdateWithWhereUniqueWithoutWorkPlaceInput[]
    updateMany?: GroupUpdateManyWithWhereWithoutWorkPlaceInput | GroupUpdateManyWithWhereWithoutWorkPlaceInput[]
    deleteMany?: GroupScalarWhereInput | GroupScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutWorkPlaceNestedInput = {
    create?: XOR<UserCreateWithoutWorkPlaceInput, UserUncheckedCreateWithoutWorkPlaceInput> | UserCreateWithoutWorkPlaceInput[] | UserUncheckedCreateWithoutWorkPlaceInput[]
    connectOrCreate?: UserCreateOrConnectWithoutWorkPlaceInput | UserCreateOrConnectWithoutWorkPlaceInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutWorkPlaceInput | UserUpsertWithWhereUniqueWithoutWorkPlaceInput[]
    createMany?: UserCreateManyWorkPlaceInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutWorkPlaceInput | UserUpdateWithWhereUniqueWithoutWorkPlaceInput[]
    updateMany?: UserUpdateManyWithWhereWithoutWorkPlaceInput | UserUpdateManyWithWhereWithoutWorkPlaceInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type GroupUncheckedUpdateManyWithoutWorkPlaceNestedInput = {
    create?: XOR<GroupCreateWithoutWorkPlaceInput, GroupUncheckedCreateWithoutWorkPlaceInput> | GroupCreateWithoutWorkPlaceInput[] | GroupUncheckedCreateWithoutWorkPlaceInput[]
    connectOrCreate?: GroupCreateOrConnectWithoutWorkPlaceInput | GroupCreateOrConnectWithoutWorkPlaceInput[]
    upsert?: GroupUpsertWithWhereUniqueWithoutWorkPlaceInput | GroupUpsertWithWhereUniqueWithoutWorkPlaceInput[]
    createMany?: GroupCreateManyWorkPlaceInputEnvelope
    set?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    disconnect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    delete?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    connect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    update?: GroupUpdateWithWhereUniqueWithoutWorkPlaceInput | GroupUpdateWithWhereUniqueWithoutWorkPlaceInput[]
    updateMany?: GroupUpdateManyWithWhereWithoutWorkPlaceInput | GroupUpdateManyWithWhereWithoutWorkPlaceInput[]
    deleteMany?: GroupScalarWhereInput | GroupScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type WorkPlaceCreateWithoutUsersInput = {
    name?: string | null
    adminId?: string | null
    groups?: GroupCreateNestedManyWithoutWorkPlaceInput
  }

  export type WorkPlaceUncheckedCreateWithoutUsersInput = {
    id?: number
    name?: string | null
    adminId?: string | null
    groups?: GroupUncheckedCreateNestedManyWithoutWorkPlaceInput
  }

  export type WorkPlaceCreateOrConnectWithoutUsersInput = {
    where: WorkPlaceWhereUniqueInput
    create: XOR<WorkPlaceCreateWithoutUsersInput, WorkPlaceUncheckedCreateWithoutUsersInput>
  }

  export type GroupCreateWithoutUsersInput = {
    name: string
    description?: string | null
    workPlace: WorkPlaceCreateNestedOneWithoutGroupsInput
    days?: DayCreateNestedManyWithoutGroupInput
  }

  export type GroupUncheckedCreateWithoutUsersInput = {
    id?: number
    name: string
    description?: string | null
    workPlaceId: number
    days?: DayUncheckedCreateNestedManyWithoutGroupInput
  }

  export type GroupCreateOrConnectWithoutUsersInput = {
    where: GroupWhereUniqueInput
    create: XOR<GroupCreateWithoutUsersInput, GroupUncheckedCreateWithoutUsersInput>
  }

  export type TokenCreateWithoutUserInput = {
    createdAt?: Date | string
    updateAt?: Date | string
    type: string
    emailToken?: string | null
    valid?: boolean
    expiration: Date | string
  }

  export type TokenUncheckedCreateWithoutUserInput = {
    id?: number
    createdAt?: Date | string
    updateAt?: Date | string
    type: string
    emailToken?: string | null
    valid?: boolean
    expiration: Date | string
  }

  export type TokenCreateOrConnectWithoutUserInput = {
    where: TokenWhereUniqueInput
    create: XOR<TokenCreateWithoutUserInput, TokenUncheckedCreateWithoutUserInput>
  }

  export type TokenCreateManyUserInputEnvelope = {
    data: TokenCreateManyUserInput | TokenCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserInDayCreateWithoutUserInput = {
    from: string
    to: string
    day: DayCreateNestedOneWithoutUsersInDayInput
  }

  export type UserInDayUncheckedCreateWithoutUserInput = {
    id?: number
    from: string
    to: string
    dayId: number
  }

  export type UserInDayCreateOrConnectWithoutUserInput = {
    where: UserInDayWhereUniqueInput
    create: XOR<UserInDayCreateWithoutUserInput, UserInDayUncheckedCreateWithoutUserInput>
  }

  export type UserInDayCreateManyUserInputEnvelope = {
    data: UserInDayCreateManyUserInput | UserInDayCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type WorkPlaceUpsertWithoutUsersInput = {
    update: XOR<WorkPlaceUpdateWithoutUsersInput, WorkPlaceUncheckedUpdateWithoutUsersInput>
    create: XOR<WorkPlaceCreateWithoutUsersInput, WorkPlaceUncheckedCreateWithoutUsersInput>
    where?: WorkPlaceWhereInput
  }

  export type WorkPlaceUpdateToOneWithWhereWithoutUsersInput = {
    where?: WorkPlaceWhereInput
    data: XOR<WorkPlaceUpdateWithoutUsersInput, WorkPlaceUncheckedUpdateWithoutUsersInput>
  }

  export type WorkPlaceUpdateWithoutUsersInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    adminId?: NullableStringFieldUpdateOperationsInput | string | null
    groups?: GroupUpdateManyWithoutWorkPlaceNestedInput
  }

  export type WorkPlaceUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    adminId?: NullableStringFieldUpdateOperationsInput | string | null
    groups?: GroupUncheckedUpdateManyWithoutWorkPlaceNestedInput
  }

  export type GroupUpsertWithoutUsersInput = {
    update: XOR<GroupUpdateWithoutUsersInput, GroupUncheckedUpdateWithoutUsersInput>
    create: XOR<GroupCreateWithoutUsersInput, GroupUncheckedCreateWithoutUsersInput>
    where?: GroupWhereInput
  }

  export type GroupUpdateToOneWithWhereWithoutUsersInput = {
    where?: GroupWhereInput
    data: XOR<GroupUpdateWithoutUsersInput, GroupUncheckedUpdateWithoutUsersInput>
  }

  export type GroupUpdateWithoutUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    workPlace?: WorkPlaceUpdateOneRequiredWithoutGroupsNestedInput
    days?: DayUpdateManyWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    workPlaceId?: IntFieldUpdateOperationsInput | number
    days?: DayUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type TokenUpsertWithWhereUniqueWithoutUserInput = {
    where: TokenWhereUniqueInput
    update: XOR<TokenUpdateWithoutUserInput, TokenUncheckedUpdateWithoutUserInput>
    create: XOR<TokenCreateWithoutUserInput, TokenUncheckedCreateWithoutUserInput>
  }

  export type TokenUpdateWithWhereUniqueWithoutUserInput = {
    where: TokenWhereUniqueInput
    data: XOR<TokenUpdateWithoutUserInput, TokenUncheckedUpdateWithoutUserInput>
  }

  export type TokenUpdateManyWithWhereWithoutUserInput = {
    where: TokenScalarWhereInput
    data: XOR<TokenUpdateManyMutationInput, TokenUncheckedUpdateManyWithoutUserInput>
  }

  export type TokenScalarWhereInput = {
    AND?: TokenScalarWhereInput | TokenScalarWhereInput[]
    OR?: TokenScalarWhereInput[]
    NOT?: TokenScalarWhereInput | TokenScalarWhereInput[]
    id?: IntFilter<"Token"> | number
    createdAt?: DateTimeFilter<"Token"> | Date | string
    updateAt?: DateTimeFilter<"Token"> | Date | string
    type?: StringFilter<"Token"> | string
    emailToken?: StringNullableFilter<"Token"> | string | null
    valid?: BoolFilter<"Token"> | boolean
    expiration?: DateTimeFilter<"Token"> | Date | string
    userId?: IntFilter<"Token"> | number
  }

  export type UserInDayUpsertWithWhereUniqueWithoutUserInput = {
    where: UserInDayWhereUniqueInput
    update: XOR<UserInDayUpdateWithoutUserInput, UserInDayUncheckedUpdateWithoutUserInput>
    create: XOR<UserInDayCreateWithoutUserInput, UserInDayUncheckedCreateWithoutUserInput>
  }

  export type UserInDayUpdateWithWhereUniqueWithoutUserInput = {
    where: UserInDayWhereUniqueInput
    data: XOR<UserInDayUpdateWithoutUserInput, UserInDayUncheckedUpdateWithoutUserInput>
  }

  export type UserInDayUpdateManyWithWhereWithoutUserInput = {
    where: UserInDayScalarWhereInput
    data: XOR<UserInDayUpdateManyMutationInput, UserInDayUncheckedUpdateManyWithoutUserInput>
  }

  export type UserInDayScalarWhereInput = {
    AND?: UserInDayScalarWhereInput | UserInDayScalarWhereInput[]
    OR?: UserInDayScalarWhereInput[]
    NOT?: UserInDayScalarWhereInput | UserInDayScalarWhereInput[]
    id?: IntFilter<"UserInDay"> | number
    from?: StringFilter<"UserInDay"> | string
    to?: StringFilter<"UserInDay"> | string
    dayId?: IntFilter<"UserInDay"> | number
    userId?: IntFilter<"UserInDay"> | number
  }

  export type UserCreateWithoutTokensInput = {
    email?: string | null
    name?: string | null
    userName?: string | null
    phoneNumber?: number | null
    workPlace?: WorkPlaceCreateNestedOneWithoutUsersInput
    group?: GroupCreateNestedOneWithoutUsersInput
    userInDay?: UserInDayCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTokensInput = {
    id?: number
    email?: string | null
    name?: string | null
    userName?: string | null
    phoneNumber?: number | null
    workPlaceId?: number | null
    groupId?: number | null
    userInDay?: UserInDayUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTokensInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTokensInput, UserUncheckedCreateWithoutTokensInput>
  }

  export type UserUpsertWithoutTokensInput = {
    update: XOR<UserUpdateWithoutTokensInput, UserUncheckedUpdateWithoutTokensInput>
    create: XOR<UserCreateWithoutTokensInput, UserUncheckedCreateWithoutTokensInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTokensInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTokensInput, UserUncheckedUpdateWithoutTokensInput>
  }

  export type UserUpdateWithoutTokensInput = {
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableIntFieldUpdateOperationsInput | number | null
    workPlace?: WorkPlaceUpdateOneWithoutUsersNestedInput
    group?: GroupUpdateOneWithoutUsersNestedInput
    userInDay?: UserInDayUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTokensInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableIntFieldUpdateOperationsInput | number | null
    workPlaceId?: NullableIntFieldUpdateOperationsInput | number | null
    groupId?: NullableIntFieldUpdateOperationsInput | number | null
    userInDay?: UserInDayUncheckedUpdateManyWithoutUserNestedInput
  }

  export type WorkPlaceCreateWithoutGroupsInput = {
    name?: string | null
    adminId?: string | null
    users?: UserCreateNestedManyWithoutWorkPlaceInput
  }

  export type WorkPlaceUncheckedCreateWithoutGroupsInput = {
    id?: number
    name?: string | null
    adminId?: string | null
    users?: UserUncheckedCreateNestedManyWithoutWorkPlaceInput
  }

  export type WorkPlaceCreateOrConnectWithoutGroupsInput = {
    where: WorkPlaceWhereUniqueInput
    create: XOR<WorkPlaceCreateWithoutGroupsInput, WorkPlaceUncheckedCreateWithoutGroupsInput>
  }

  export type UserCreateWithoutGroupInput = {
    email?: string | null
    name?: string | null
    userName?: string | null
    phoneNumber?: number | null
    workPlace?: WorkPlaceCreateNestedOneWithoutUsersInput
    tokens?: TokenCreateNestedManyWithoutUserInput
    userInDay?: UserInDayCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutGroupInput = {
    id?: number
    email?: string | null
    name?: string | null
    userName?: string | null
    phoneNumber?: number | null
    workPlaceId?: number | null
    tokens?: TokenUncheckedCreateNestedManyWithoutUserInput
    userInDay?: UserInDayUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutGroupInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGroupInput, UserUncheckedCreateWithoutGroupInput>
  }

  export type UserCreateManyGroupInputEnvelope = {
    data: UserCreateManyGroupInput | UserCreateManyGroupInput[]
    skipDuplicates?: boolean
  }

  export type DayCreateWithoutGroupInput = {
    date: string
    usersInDay?: UserInDayCreateNestedManyWithoutDayInput
  }

  export type DayUncheckedCreateWithoutGroupInput = {
    id?: number
    date: string
    usersInDay?: UserInDayUncheckedCreateNestedManyWithoutDayInput
  }

  export type DayCreateOrConnectWithoutGroupInput = {
    where: DayWhereUniqueInput
    create: XOR<DayCreateWithoutGroupInput, DayUncheckedCreateWithoutGroupInput>
  }

  export type DayCreateManyGroupInputEnvelope = {
    data: DayCreateManyGroupInput | DayCreateManyGroupInput[]
    skipDuplicates?: boolean
  }

  export type WorkPlaceUpsertWithoutGroupsInput = {
    update: XOR<WorkPlaceUpdateWithoutGroupsInput, WorkPlaceUncheckedUpdateWithoutGroupsInput>
    create: XOR<WorkPlaceCreateWithoutGroupsInput, WorkPlaceUncheckedCreateWithoutGroupsInput>
    where?: WorkPlaceWhereInput
  }

  export type WorkPlaceUpdateToOneWithWhereWithoutGroupsInput = {
    where?: WorkPlaceWhereInput
    data: XOR<WorkPlaceUpdateWithoutGroupsInput, WorkPlaceUncheckedUpdateWithoutGroupsInput>
  }

  export type WorkPlaceUpdateWithoutGroupsInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    adminId?: NullableStringFieldUpdateOperationsInput | string | null
    users?: UserUpdateManyWithoutWorkPlaceNestedInput
  }

  export type WorkPlaceUncheckedUpdateWithoutGroupsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    adminId?: NullableStringFieldUpdateOperationsInput | string | null
    users?: UserUncheckedUpdateManyWithoutWorkPlaceNestedInput
  }

  export type UserUpsertWithWhereUniqueWithoutGroupInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutGroupInput, UserUncheckedUpdateWithoutGroupInput>
    create: XOR<UserCreateWithoutGroupInput, UserUncheckedCreateWithoutGroupInput>
  }

  export type UserUpdateWithWhereUniqueWithoutGroupInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutGroupInput, UserUncheckedUpdateWithoutGroupInput>
  }

  export type UserUpdateManyWithWhereWithoutGroupInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutGroupInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringNullableFilter<"User"> | string | null
    name?: StringNullableFilter<"User"> | string | null
    userName?: StringNullableFilter<"User"> | string | null
    phoneNumber?: IntNullableFilter<"User"> | number | null
    workPlaceId?: IntNullableFilter<"User"> | number | null
    groupId?: IntNullableFilter<"User"> | number | null
  }

  export type DayUpsertWithWhereUniqueWithoutGroupInput = {
    where: DayWhereUniqueInput
    update: XOR<DayUpdateWithoutGroupInput, DayUncheckedUpdateWithoutGroupInput>
    create: XOR<DayCreateWithoutGroupInput, DayUncheckedCreateWithoutGroupInput>
  }

  export type DayUpdateWithWhereUniqueWithoutGroupInput = {
    where: DayWhereUniqueInput
    data: XOR<DayUpdateWithoutGroupInput, DayUncheckedUpdateWithoutGroupInput>
  }

  export type DayUpdateManyWithWhereWithoutGroupInput = {
    where: DayScalarWhereInput
    data: XOR<DayUpdateManyMutationInput, DayUncheckedUpdateManyWithoutGroupInput>
  }

  export type DayScalarWhereInput = {
    AND?: DayScalarWhereInput | DayScalarWhereInput[]
    OR?: DayScalarWhereInput[]
    NOT?: DayScalarWhereInput | DayScalarWhereInput[]
    id?: IntFilter<"Day"> | number
    date?: StringFilter<"Day"> | string
    groupId?: IntFilter<"Day"> | number
  }

  export type GroupCreateWithoutDaysInput = {
    name: string
    description?: string | null
    workPlace: WorkPlaceCreateNestedOneWithoutGroupsInput
    users?: UserCreateNestedManyWithoutGroupInput
  }

  export type GroupUncheckedCreateWithoutDaysInput = {
    id?: number
    name: string
    description?: string | null
    workPlaceId: number
    users?: UserUncheckedCreateNestedManyWithoutGroupInput
  }

  export type GroupCreateOrConnectWithoutDaysInput = {
    where: GroupWhereUniqueInput
    create: XOR<GroupCreateWithoutDaysInput, GroupUncheckedCreateWithoutDaysInput>
  }

  export type UserInDayCreateWithoutDayInput = {
    from: string
    to: string
    user: UserCreateNestedOneWithoutUserInDayInput
  }

  export type UserInDayUncheckedCreateWithoutDayInput = {
    id?: number
    from: string
    to: string
    userId: number
  }

  export type UserInDayCreateOrConnectWithoutDayInput = {
    where: UserInDayWhereUniqueInput
    create: XOR<UserInDayCreateWithoutDayInput, UserInDayUncheckedCreateWithoutDayInput>
  }

  export type UserInDayCreateManyDayInputEnvelope = {
    data: UserInDayCreateManyDayInput | UserInDayCreateManyDayInput[]
    skipDuplicates?: boolean
  }

  export type GroupUpsertWithoutDaysInput = {
    update: XOR<GroupUpdateWithoutDaysInput, GroupUncheckedUpdateWithoutDaysInput>
    create: XOR<GroupCreateWithoutDaysInput, GroupUncheckedCreateWithoutDaysInput>
    where?: GroupWhereInput
  }

  export type GroupUpdateToOneWithWhereWithoutDaysInput = {
    where?: GroupWhereInput
    data: XOR<GroupUpdateWithoutDaysInput, GroupUncheckedUpdateWithoutDaysInput>
  }

  export type GroupUpdateWithoutDaysInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    workPlace?: WorkPlaceUpdateOneRequiredWithoutGroupsNestedInput
    users?: UserUpdateManyWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateWithoutDaysInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    workPlaceId?: IntFieldUpdateOperationsInput | number
    users?: UserUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type UserInDayUpsertWithWhereUniqueWithoutDayInput = {
    where: UserInDayWhereUniqueInput
    update: XOR<UserInDayUpdateWithoutDayInput, UserInDayUncheckedUpdateWithoutDayInput>
    create: XOR<UserInDayCreateWithoutDayInput, UserInDayUncheckedCreateWithoutDayInput>
  }

  export type UserInDayUpdateWithWhereUniqueWithoutDayInput = {
    where: UserInDayWhereUniqueInput
    data: XOR<UserInDayUpdateWithoutDayInput, UserInDayUncheckedUpdateWithoutDayInput>
  }

  export type UserInDayUpdateManyWithWhereWithoutDayInput = {
    where: UserInDayScalarWhereInput
    data: XOR<UserInDayUpdateManyMutationInput, UserInDayUncheckedUpdateManyWithoutDayInput>
  }

  export type DayCreateWithoutUsersInDayInput = {
    date: string
    group: GroupCreateNestedOneWithoutDaysInput
  }

  export type DayUncheckedCreateWithoutUsersInDayInput = {
    id?: number
    date: string
    groupId: number
  }

  export type DayCreateOrConnectWithoutUsersInDayInput = {
    where: DayWhereUniqueInput
    create: XOR<DayCreateWithoutUsersInDayInput, DayUncheckedCreateWithoutUsersInDayInput>
  }

  export type UserCreateWithoutUserInDayInput = {
    email?: string | null
    name?: string | null
    userName?: string | null
    phoneNumber?: number | null
    workPlace?: WorkPlaceCreateNestedOneWithoutUsersInput
    group?: GroupCreateNestedOneWithoutUsersInput
    tokens?: TokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUserInDayInput = {
    id?: number
    email?: string | null
    name?: string | null
    userName?: string | null
    phoneNumber?: number | null
    workPlaceId?: number | null
    groupId?: number | null
    tokens?: TokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUserInDayInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserInDayInput, UserUncheckedCreateWithoutUserInDayInput>
  }

  export type DayUpsertWithoutUsersInDayInput = {
    update: XOR<DayUpdateWithoutUsersInDayInput, DayUncheckedUpdateWithoutUsersInDayInput>
    create: XOR<DayCreateWithoutUsersInDayInput, DayUncheckedCreateWithoutUsersInDayInput>
    where?: DayWhereInput
  }

  export type DayUpdateToOneWithWhereWithoutUsersInDayInput = {
    where?: DayWhereInput
    data: XOR<DayUpdateWithoutUsersInDayInput, DayUncheckedUpdateWithoutUsersInDayInput>
  }

  export type DayUpdateWithoutUsersInDayInput = {
    date?: StringFieldUpdateOperationsInput | string
    group?: GroupUpdateOneRequiredWithoutDaysNestedInput
  }

  export type DayUncheckedUpdateWithoutUsersInDayInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: StringFieldUpdateOperationsInput | string
    groupId?: IntFieldUpdateOperationsInput | number
  }

  export type UserUpsertWithoutUserInDayInput = {
    update: XOR<UserUpdateWithoutUserInDayInput, UserUncheckedUpdateWithoutUserInDayInput>
    create: XOR<UserCreateWithoutUserInDayInput, UserUncheckedCreateWithoutUserInDayInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserInDayInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserInDayInput, UserUncheckedUpdateWithoutUserInDayInput>
  }

  export type UserUpdateWithoutUserInDayInput = {
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableIntFieldUpdateOperationsInput | number | null
    workPlace?: WorkPlaceUpdateOneWithoutUsersNestedInput
    group?: GroupUpdateOneWithoutUsersNestedInput
    tokens?: TokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUserInDayInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableIntFieldUpdateOperationsInput | number | null
    workPlaceId?: NullableIntFieldUpdateOperationsInput | number | null
    groupId?: NullableIntFieldUpdateOperationsInput | number | null
    tokens?: TokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutWorkPlaceInput = {
    email?: string | null
    name?: string | null
    userName?: string | null
    phoneNumber?: number | null
    group?: GroupCreateNestedOneWithoutUsersInput
    tokens?: TokenCreateNestedManyWithoutUserInput
    userInDay?: UserInDayCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutWorkPlaceInput = {
    id?: number
    email?: string | null
    name?: string | null
    userName?: string | null
    phoneNumber?: number | null
    groupId?: number | null
    tokens?: TokenUncheckedCreateNestedManyWithoutUserInput
    userInDay?: UserInDayUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutWorkPlaceInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWorkPlaceInput, UserUncheckedCreateWithoutWorkPlaceInput>
  }

  export type UserCreateManyWorkPlaceInputEnvelope = {
    data: UserCreateManyWorkPlaceInput | UserCreateManyWorkPlaceInput[]
    skipDuplicates?: boolean
  }

  export type GroupCreateWithoutWorkPlaceInput = {
    name: string
    description?: string | null
    users?: UserCreateNestedManyWithoutGroupInput
    days?: DayCreateNestedManyWithoutGroupInput
  }

  export type GroupUncheckedCreateWithoutWorkPlaceInput = {
    id?: number
    name: string
    description?: string | null
    users?: UserUncheckedCreateNestedManyWithoutGroupInput
    days?: DayUncheckedCreateNestedManyWithoutGroupInput
  }

  export type GroupCreateOrConnectWithoutWorkPlaceInput = {
    where: GroupWhereUniqueInput
    create: XOR<GroupCreateWithoutWorkPlaceInput, GroupUncheckedCreateWithoutWorkPlaceInput>
  }

  export type GroupCreateManyWorkPlaceInputEnvelope = {
    data: GroupCreateManyWorkPlaceInput | GroupCreateManyWorkPlaceInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutWorkPlaceInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutWorkPlaceInput, UserUncheckedUpdateWithoutWorkPlaceInput>
    create: XOR<UserCreateWithoutWorkPlaceInput, UserUncheckedCreateWithoutWorkPlaceInput>
  }

  export type UserUpdateWithWhereUniqueWithoutWorkPlaceInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutWorkPlaceInput, UserUncheckedUpdateWithoutWorkPlaceInput>
  }

  export type UserUpdateManyWithWhereWithoutWorkPlaceInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutWorkPlaceInput>
  }

  export type GroupUpsertWithWhereUniqueWithoutWorkPlaceInput = {
    where: GroupWhereUniqueInput
    update: XOR<GroupUpdateWithoutWorkPlaceInput, GroupUncheckedUpdateWithoutWorkPlaceInput>
    create: XOR<GroupCreateWithoutWorkPlaceInput, GroupUncheckedCreateWithoutWorkPlaceInput>
  }

  export type GroupUpdateWithWhereUniqueWithoutWorkPlaceInput = {
    where: GroupWhereUniqueInput
    data: XOR<GroupUpdateWithoutWorkPlaceInput, GroupUncheckedUpdateWithoutWorkPlaceInput>
  }

  export type GroupUpdateManyWithWhereWithoutWorkPlaceInput = {
    where: GroupScalarWhereInput
    data: XOR<GroupUpdateManyMutationInput, GroupUncheckedUpdateManyWithoutWorkPlaceInput>
  }

  export type GroupScalarWhereInput = {
    AND?: GroupScalarWhereInput | GroupScalarWhereInput[]
    OR?: GroupScalarWhereInput[]
    NOT?: GroupScalarWhereInput | GroupScalarWhereInput[]
    id?: IntFilter<"Group"> | number
    name?: StringFilter<"Group"> | string
    description?: StringNullableFilter<"Group"> | string | null
    workPlaceId?: IntFilter<"Group"> | number
  }

  export type TokenCreateManyUserInput = {
    id?: number
    createdAt?: Date | string
    updateAt?: Date | string
    type: string
    emailToken?: string | null
    valid?: boolean
    expiration: Date | string
  }

  export type UserInDayCreateManyUserInput = {
    id?: number
    from: string
    to: string
    dayId: number
  }

  export type TokenUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    emailToken?: NullableStringFieldUpdateOperationsInput | string | null
    valid?: BoolFieldUpdateOperationsInput | boolean
    expiration?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    emailToken?: NullableStringFieldUpdateOperationsInput | string | null
    valid?: BoolFieldUpdateOperationsInput | boolean
    expiration?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    emailToken?: NullableStringFieldUpdateOperationsInput | string | null
    valid?: BoolFieldUpdateOperationsInput | boolean
    expiration?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserInDayUpdateWithoutUserInput = {
    from?: StringFieldUpdateOperationsInput | string
    to?: StringFieldUpdateOperationsInput | string
    day?: DayUpdateOneRequiredWithoutUsersInDayNestedInput
  }

  export type UserInDayUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    from?: StringFieldUpdateOperationsInput | string
    to?: StringFieldUpdateOperationsInput | string
    dayId?: IntFieldUpdateOperationsInput | number
  }

  export type UserInDayUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    from?: StringFieldUpdateOperationsInput | string
    to?: StringFieldUpdateOperationsInput | string
    dayId?: IntFieldUpdateOperationsInput | number
  }

  export type UserCreateManyGroupInput = {
    id?: number
    email?: string | null
    name?: string | null
    userName?: string | null
    phoneNumber?: number | null
    workPlaceId?: number | null
  }

  export type DayCreateManyGroupInput = {
    id?: number
    date: string
  }

  export type UserUpdateWithoutGroupInput = {
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableIntFieldUpdateOperationsInput | number | null
    workPlace?: WorkPlaceUpdateOneWithoutUsersNestedInput
    tokens?: TokenUpdateManyWithoutUserNestedInput
    userInDay?: UserInDayUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutGroupInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableIntFieldUpdateOperationsInput | number | null
    workPlaceId?: NullableIntFieldUpdateOperationsInput | number | null
    tokens?: TokenUncheckedUpdateManyWithoutUserNestedInput
    userInDay?: UserInDayUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutGroupInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableIntFieldUpdateOperationsInput | number | null
    workPlaceId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type DayUpdateWithoutGroupInput = {
    date?: StringFieldUpdateOperationsInput | string
    usersInDay?: UserInDayUpdateManyWithoutDayNestedInput
  }

  export type DayUncheckedUpdateWithoutGroupInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: StringFieldUpdateOperationsInput | string
    usersInDay?: UserInDayUncheckedUpdateManyWithoutDayNestedInput
  }

  export type DayUncheckedUpdateManyWithoutGroupInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: StringFieldUpdateOperationsInput | string
  }

  export type UserInDayCreateManyDayInput = {
    id?: number
    from: string
    to: string
    userId: number
  }

  export type UserInDayUpdateWithoutDayInput = {
    from?: StringFieldUpdateOperationsInput | string
    to?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutUserInDayNestedInput
  }

  export type UserInDayUncheckedUpdateWithoutDayInput = {
    id?: IntFieldUpdateOperationsInput | number
    from?: StringFieldUpdateOperationsInput | string
    to?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type UserInDayUncheckedUpdateManyWithoutDayInput = {
    id?: IntFieldUpdateOperationsInput | number
    from?: StringFieldUpdateOperationsInput | string
    to?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type UserCreateManyWorkPlaceInput = {
    id?: number
    email?: string | null
    name?: string | null
    userName?: string | null
    phoneNumber?: number | null
    groupId?: number | null
  }

  export type GroupCreateManyWorkPlaceInput = {
    id?: number
    name: string
    description?: string | null
  }

  export type UserUpdateWithoutWorkPlaceInput = {
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableIntFieldUpdateOperationsInput | number | null
    group?: GroupUpdateOneWithoutUsersNestedInput
    tokens?: TokenUpdateManyWithoutUserNestedInput
    userInDay?: UserInDayUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutWorkPlaceInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableIntFieldUpdateOperationsInput | number | null
    groupId?: NullableIntFieldUpdateOperationsInput | number | null
    tokens?: TokenUncheckedUpdateManyWithoutUserNestedInput
    userInDay?: UserInDayUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutWorkPlaceInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableIntFieldUpdateOperationsInput | number | null
    groupId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type GroupUpdateWithoutWorkPlaceInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    users?: UserUpdateManyWithoutGroupNestedInput
    days?: DayUpdateManyWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateWithoutWorkPlaceInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    users?: UserUncheckedUpdateManyWithoutGroupNestedInput
    days?: DayUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateManyWithoutWorkPlaceInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use GroupCountOutputTypeDefaultArgs instead
     */
    export type GroupCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = GroupCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DayCountOutputTypeDefaultArgs instead
     */
    export type DayCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = DayCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use WorkPlaceCountOutputTypeDefaultArgs instead
     */
    export type WorkPlaceCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = WorkPlaceCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TokenDefaultArgs instead
     */
    export type TokenArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = TokenDefaultArgs<ExtArgs>
    /**
     * @deprecated Use GroupDefaultArgs instead
     */
    export type GroupArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = GroupDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DayDefaultArgs instead
     */
    export type DayArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = DayDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserInDayDefaultArgs instead
     */
    export type UserInDayArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = UserInDayDefaultArgs<ExtArgs>
    /**
     * @deprecated Use WorkPlaceDefaultArgs instead
     */
    export type WorkPlaceArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = WorkPlaceDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}