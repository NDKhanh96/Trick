/**
 * Cách 1: Sử dụng fs
 */
// import { existsSync, readFileSync } from 'fs';

// function getCurrentBranchName() {
//   const gitHeadPath = `${process.cwd()}/.git/HEAD`;
//   if (!existsSync(gitHeadPath)) {
//     return null;
//   }
  
//   return readFileSync(gitHeadPath, 'utf-8').trim().split('/')[2];
// }

// console.log(getCurrentBranchName());
// getCurrentBranchName();

/**
 * Cách 2: Sử dụng child_process
 * await getCurrentBranchName() để lấy ra tên branch hiện tại
 */

import { exec, type ExecException } from 'child_process';

const commandCheckGitBranchInShell: string = 'git rev-parse --abbrev-ref HEAD';

function getCurrentBranchName(): Promise<string> {
  return new Promise<string>((resolve: (value: string) => void, reject: (reason: string) => void): void => {
    exec(commandCheckGitBranchInShell, (error: ExecException | null, stdout: string, stderr: string): void => {
      error ? reject(stderr) : resolve(stdout.trim());
    });
  });
}

export async function printCurrentBranchName(): Promise<string> {
  try {
    const branchName: string = await getCurrentBranchName();
    return branchName;
  } catch (error) {
    console.warn('Cannot get the git branch name, will use default name <develop>');
    console.error(error);
    return 'develop';
  }
}

printCurrentBranchName();