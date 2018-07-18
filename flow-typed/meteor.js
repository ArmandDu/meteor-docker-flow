type SettingsType = {
  public: {
    [id: string]: any
  }, 
  [id: string]: any
}

type SubscriptionHandle = {
  stop(): void;
  ready(): boolean;
}

type UserEmail = {
  address: string;
  verified: boolean;
}

type User = {
  _id: string;
  username?: string;
  emails?: Array<UserEmail>;
  createdAt?: number;
  profile?: any;
  services?: any;
  roles: ?any;
}

type LoginWithExternalServiceOptions = {
  requestPermissions?: string[];
  requestOfflineToken?: Boolean;
  forceApprovalPrompt?: Boolean;
  loginUrlParameters?: Object;
  redirectUrl?: string;
  loginHint?: string;
  loginStyle?: string;
}
  
interface Error {
  constructor(reason?: string): Error;

  error: string | number;
  reason?: string;
  details?: string;
}


declare module MeteorGlobal {
  declare class LiveQueryHandle {}
}
declare var Meteor: $Exports<"MeteorGlobal">;

declare module "meteor/meteor" {
  
  declare class Meteor {

    static isClient: boolean;
    static isCordova: boolean;
    static isServer: boolean;
    static isProduction: boolean;
    static release: string;

    static settings: SettingsType;

    static methods(methods: Object): void;
    static call(name: string, ...args: Array<any>): any;
    static apply(name: string, args: Array<Object>, options?: {
                  wait?: boolean,
                  onResultReceived?: Function,
                  returnStubValue?: boolean,
                  throwStubExceptions?: boolean,
                }, asyncCallback?: Function): any;

    static subscribe(name: string, ...args: any[]): SubscriptionHandle;
    static publish(name: string, func: Function): void;

    static users: Mongo.Collection<User>;
    static user(): ?User;
    static userId(): ?string;

    static loginWithMeteorDeveloperAccount(options?: LoginWithExternalServiceOptions, callback?: Function): void;
    static loginWithFacebook(options?: LoginWithExternalServiceOptions, callback?: Function): void;
    static loginWithGithub(options?: LoginWithExternalServiceOptions, callback?: Function): void;
    static loginWithGoogle(options?: LoginWithExternalServiceOptions, callback?: Function): void;
    static loginWithMeetup(options?: LoginWithExternalServiceOptions, callback?: Function): void;
    static loginWithTwitter(options?: LoginWithExternalServiceOptions, callback?: Function): void;
    static loginWithWeibo(options?: LoginWithExternalServiceOptions, callback?: Function): void;
    static loginWithEventbrite(options?: LoginWithExternalServiceOptions, callback?: Function): void;

    static loginWithPassword(user: Object | string, password: string, callback?: Function): void;
    static loginWithToken(token: string, callback?: Function): void;
    static logout(callback?: Function): void;

    static Error(reason?: string): Error;

    static startup(func: Function): void;
  }


}

declare module "meteor/accounts-base" {
  declare class Accounts {
    static onCreateUser(callback: (options: any, user: User) => User) : void
  }
}