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
              .DeployToGitHubPages(
                  "Inerska",
                  "Inerska",
                  Config.FromSetting<string>("GITHUB_TOKEN"),
                  "master"
              )
              .RunAsync()
              .ConfigureAwait(true);
    }
}
