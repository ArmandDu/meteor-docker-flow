type Configuration = {
  service: string,
  [key: string]: string
}

declare module ServiceConfigurationGlobal {

  declare module.exports: {
    configurations: Mongo.Collection<Configuration>
  }

}
declare var ServiceConfiguration: $Exports<"ServiceConfigurationGlobal">;
