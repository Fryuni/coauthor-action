import * as core from "@actions/core";
import * as github from "@actions/github";

async function run() {
	try {
		// The `who-to-greet` input is defined in action metadata file
		// 	const whoToGreet = core.getInput("who-to-greet", { required: true });
		// 	core.info(`Hello, ${whoToGreet}!`);

		// 	// Get the current time and set as an output
		// 	const time = new Date().toTimeString();
		// 	core.setOutput("time", time);

		// 	// Output the payload for debugging
		// 	core.info(
		// 		`The event payload: ${JSON.stringify(github.context.payload, null, 2)}`,
		// 	);
		// } catch (error) {
		// 	// Fail the workflow step if an error occurs
		// 	core.setFailed(error.message);

		// const token = core.getInput("repo-token")
		// const octokit = github.getOctokit(token)
		const context = github.context;
		console.log(context);
		// const result = await octokit.graphql("query", "variables");
	} catch (error) {
		if (error instanceof Error) {
			core.setFailed(error.message);
		}
	}
}

run();