using System.Threading.Tasks;
using Statiq.App;
using Statiq.Common;
using Statiq.Web;

namespace MyBlog
{
    public static class Program
    {
        public static async Task<int> Main(string[] args)
        {
            return await Bootstrapper.Factory
                .CreateWeb(args)
                .DeployToGitHubPages(
                    "Inerska",
                    "inerska.github.io",
                    Config.FromSetting<string>("GITHUB_TOKEN")
                )
                .RunAsync()
                .ConfigureAwait(true);
        }
    }
}