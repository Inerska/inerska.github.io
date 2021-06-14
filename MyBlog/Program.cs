namespace MyBlog
{
    using System.Threading.Tasks;
    using Statiq.App;
    using Statiq.Common;
    using Statiq.Web;

    public static class Program
    {
        public static async Task<int> Main(string[] args) =>
          await Bootstrapper.Factory
              .CreateWeb(args)
              .ConfigureSettings(settings => settings["GitHubBranch"] = "main")
              .DeployToGitHubPages(
                  "Inerska",
                  "inerska.github.io",
                  Config.FromSetting<string>("GITHUB_TOKEN"),
                  "master"
              )
              .AddHostingCommands()
              .RunAsync()
              .ConfigureAwait(true);
    }
}
