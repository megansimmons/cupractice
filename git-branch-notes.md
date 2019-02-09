Last login: Wed Jan 30 10:48:27 on ttys000
Megans-MacBook-Pro:~ megansimmons$ ~ cd desktop
-bash: /Users/megansimmons: is a directory
Megans-MacBook-Pro:~ megansimmons$ mkdir git-branch-test
Megans-MacBook-Pro:~ megansimmons$ cd git-branch-test
Megans-MacBook-Pro:git-branch-test megansimmons$ ls
Megans-MacBook-Pro:git-branch-test megansimmons$ git init
Initialized empty Git repository in /Users/megansimmons/git-branch-test/.git/
Megans-MacBook-Pro:git-branch-test megansimmons$ ls -a
.	..	.git
Megans-MacBook-Pro:git-branch-test megansimmons$ git status
On branch master

No commits yet

nothing to commit (create/copy files and use "git add" to track)
Megans-MacBook-Pro:git-branch-test megansimmons$ git branch
Megans-MacBook-Pro:git-branch-test megansimmons$ git branch
Megans-MacBook-Pro:git-branch-test megansimmons$ touch master-file.txt
Megans-MacBook-Pro:git-branch-test megansimmons$ ls
master-file.txt
Megans-MacBook-Pro:git-branch-test megansimmons$ git status
On branch master

No commits yet

Untracked files:
(use "git add <file>..." to include in what will be committed)

    master-file.txt

    nothing added to commit but untracked files present (use "git add" to track)
    Megans-MacBook-Pro:git-branch-test megansimmons$ git add master.txt
    fatal: pathspec 'master.txt' did not match any files
    Megans-MacBook-Pro:git-branch-test megansimmons$ git add master-file.txt
    Megans-MacBook-Pro:git-branch-test megansimmons$ git status
    On branch master

    No commits yet

    Changes to be committed:
    (use "git rm --cached <file>..." to unstage)

        new file:   master-file.txt

        Megans-MacBook-Pro:git-branch-test megansimmons$ git commit -m 'add master-file.txt'
        [master (root-commit) 3696e1a] add master-file.txt
        1 file changed, 0 insertions(+), 0 deletions(-)
        create mode 100644 master-file.txt
        Megans-MacBook-Pro:git-branch-test megansimmons$ git log
        commit 3696e1a747b746a73c2bfabdacebdaed12f1bb9a (HEAD -> master)
        Author: megansimmons <simmons.megan584@gmail.com>
        Date:   Thu Feb 7 09:57:07 2019 -0600

        add master-file.txt
        Megans-MacBook-Pro:git-branch-test megansimmons$ git checkout -b some-branch
        Switched to a new branch 'some-branch'
        Megans-MacBook-Pro:git-branch-test megansimmons$ git log
        commit 3696e1a747b746a73c2bfabdacebdaed12f1bb9a (HEAD -> some-branch, master)
        Author: megansimmons <simmons.megan584@gmail.com>
        Date:   Thu Feb 7 09:57:07 2019 -0600

        add master-file.txt
        Megans-MacBook-Pro:git-branch-test megansimmons$ touch another-file.txt
        Megans-MacBook-Pro:git-branch-test megansimmons$ git status
        On branch some-branch
        Untracked files:
        (use "git add <file>..." to include in what will be committed)

            another-file.txt

            nothing added to commit but untracked files present (use "git add" to track)
            Megans-MacBook-Pro:git-branch-test megansimmons$ git commit -m 'another file on some-branch'
            On branch some-branch
            Untracked files:
            another-file.txt

            nothing added to commit but untracked files present
            Megans-MacBook-Pro:git-branch-test megansimmons$ git add another-file.txt
            Megans-MacBook-Pro:git-branch-test megansimmons$ git commit -m 'add another file.txt'
            [some-branch 994b821] add another file.txt
            1 file changed, 0 insertions(+), 0 deletions(-)
            create mode 100644 another-file.txt
            Megans-MacBook-Pro:git-branch-test megansimmons$ git stats
            git: 'stats' is not a git command. See 'git --help'.

            The most similar command is
            status
            Megans-MacBook-Pro:git-branch-test megansimmons$ git status
            On branch some-branch
            nothing to commit, working tree clean
            Megans-MacBook-Pro:git-branch-test megansimmons$ git checkout master
            Switched to branch 'master'
            Megans-MacBook-Pro:git-branch-test megansimmons$ ls
            master-file.txt
            Megans-MacBook-Pro:git-branch-test megansimmons$ git log
            commit 3696e1a747b746a73c2bfabdacebdaed12f1bb9a (HEAD -> master)
            Author: megansimmons <simmons.megan584@gmail.com>
            Date:   Thu Feb 7 09:57:07 2019 -0600

            add master-file.txt
            Megans-MacBook-Pro:git-branch-test megansimmons$ git merge some-branch
            Updating 3696e1a..994b821
            Fast-forward
            another-file.txt | 0
            1 file changed, 0 insertions(+), 0 deletions(-)
            create mode 100644 another-file.txt
            Megans-MacBook-Pro:git-branch-test megansimmons$ git log
            commit 994b8218626481177eebedd4d41261d10deda227 (HEAD -> master, some-branch)
            Author: megansimmons <simmons.megan584@gmail.com>
            Date:   Thu Feb 7 09:59:17 2019 -0600

            add another file.txt

            commit 3696e1a747b746a73c2bfabdacebdaed12f1bb9a
            Author: megansimmons <simmons.megan584@gmail.com>
            Date:   Thu Feb 7 09:57:07 2019 -0600

            add master-file.txt
            Megans-MacBook-Pro:git-branch-test megansimmons$ ls
            another-file.txt	master-file.txt
            Megans-MacBook-Pro:git-branch-test megansimmons$ git branch
            * master
            some-branch
            Megans-MacBook-Pro:git-branch-test megansimmons$


            //I think I fucked up this next attempt

            Megans-MacBook-Pro:cupractice megansimmons$ git status
            On branch master

            No commits yet

            Changes to be committed:
            (use "git rm --cached <file>..." to unstage)

                new file:   .gitignore
                new file:   boxes-one.html
                new file:   codeup-design-practice.html
                new file:   css-selector-practice.html
                new file:   css_practice/boxes-one.css
                new file:   css_practice/codeup-design-practice.css
                new file:   css_practice/css-selector-practice.css
                new file:   css_practice/goodm.css
                new file:   css_practice/welcomechallenge.css
                new file:   form_one.html
                new file:   functions_js_one.html
                new file:   good_morning.html
                new file:   if-else-js-one.html
                new file:   iterating_one_js.html
                new file:   js_practice/functions_one.js
                new file:   js_practice/if-else-one.js
                new file:   js_practice/iterating_one.js
                new file:   js_practice/loops_practice.js
                new file:   js_practice/planets-array-one.js
                new file:   js_practice/planets-string-one.js
                new file:   js_practice/practice_tx_star.html
                new file:   js_practice/switch_one.js
                new file:   loops_practice.html
                new file:   pics/adult-art.jpg
                new file:   pics/adventure.jpg
                new file:   pics/afro-beauty.jpg
                new file:   pics/ballerina.jpg
                new file:   pics/belgian-sheepdog.jpg
                new file:   pics/pipes.png
                new file:   pics/seigaiha.png
                new file:   planets-array-one.html
                new file:   split-join-one.html
                new file:   switch_js_one.html
                new file:   texas.svg
                new file:   welcomechallenge-styling.png
                new file:   welcomechallenge.html

                Changes not staged for commit:
                (use "git add <file>..." to update what will be committed)
                    (use "git checkout -- <file>..." to discard changes in working directory)

                        modified:   codeup-design-practice.html
                        modified:   css-selector-practice.html
                        modified:   css_practice/codeup-design-practice.css
                        modified:   css_practice/css-selector-practice.css

                        Untracked files:
                        (use "git add <file>..." to include in what will be committed)

                            bs-grid-one.html
                            git-branch-notes.html
                            js_word_problems.html
                            pics/apple-ipad.jpg
                            pics/google-search.jpg
                            pics/head.jpg
                            pics/ipad.jpg
                            pics/logo.jpg
                            pics/macbook.jpg
                            pics/man.jpg
                            pics/mobile-phone.jpg
                            pics/security.jpg
                            pics/twitter.png

                            Megans-MacBook-Pro:cupractice megansimmons$ git add .
                            Megans-MacBook-Pro:cupractice megansimmons$ git commit -m
                            error: switch `m' requires a value
                            usage: git commit [<options>] [--] <pathspec>...

                                -q, --quiet           suppress summary after successful commit
                                -v, --verbose         show diff in commit message template

                                Commit message options
                                -F, --file <file>     read message from file
                                    --author <author>     override author for commit
                                        --date <date>         override date for commit
                                            -m, --message <message>
                                                commit message
                                                -c, --reedit-message <commit>
                                                reuse and edit message from specified commit
                                                -C, --reuse-message <commit>
                                                reuse message from specified commit
                                                --fixup <commit>      use autosquash formatted message to fixup specified commit
                                                --squash <commit>     use autosquash formatted message to squash specified commit
                                                    --reset-author        the commit is authored by me now (used with -C/-c/--amend)
                                                    -s, --signoff         add Signed-off-by:
                                                    -t, --template <file>
                                                        use specified template file
                                                        -e, --edit            force edit of commit
                                                        --cleanup <default>   how to strip spaces and #comments from message
                                                        --status              include status in commit message template
                                                        -S, --gpg-sign[=<key-id>]
                                                            GPG sign commit

                                                            Commit contents options
                                                            -a, --all             commit all changed files
                                                            -i, --include         add specified files to index for commit
                                                            --interactive         interactively add files
                                                            -p, --patch           interactively add changes
                                                            -o, --only            commit only specified files
                                                            -n, --no-verify       bypass pre-commit and commit-msg hooks
                                                            --dry-run             show what would be committed
                                                            --short               show status concisely
                                                            --branch              show branch information
                                                            --ahead-behind        compute full ahead/behind values
                                                            --porcelain           machine-readable output
                                                            --long                show status in long format (default)
                                                            -z, --null            terminate entries with NUL
                                                            --amend               amend previous commit
                                                            --no-post-rewrite     bypass post-rewrite hook
                                                            -u, --untracked-files[=<mode>]
                                                                show untracked files, optional modes: all, normal, no. (Default: all)

                                                                Megans-MacBook-Pro:cupractice megansimmons$ git status
                                                                On branch master

                                                                No commits yet

                                                                Changes to be committed:
                                                                (use "git rm --cached <file>..." to unstage)

                                                                    new file:   .gitignore
                                                                    new file:   boxes-one.html
                                                                    new file:   bs-grid-one.html
                                                                    new file:   codeup-design-practice.html
                                                                    new file:   css-selector-practice.html
                                                                    new file:   css_practice/boxes-one.css
                                                                    new file:   css_practice/codeup-design-practice.css
                                                                    new file:   css_practice/css-selector-practice.css
                                                                    new file:   css_practice/goodm.css
                                                                    new file:   css_practice/welcomechallenge.css
                                                                    new file:   form_one.html
                                                                    new file:   functions_js_one.html
                                                                    new file:   git-branch-notes.html
                                                                    new file:   good_morning.html
                                                                    new file:   if-else-js-one.html
                                                                    new file:   iterating_one_js.html
                                                                    new file:   js_practice/functions_one.js
                                                                    new file:   js_practice/if-else-one.js
                                                                    new file:   js_practice/iterating_one.js
                                                                    new file:   js_practice/loops_practice.js
                                                                    new file:   js_practice/planets-array-one.js
                                                                    new file:   js_practice/planets-string-one.js
                                                                    new file:   js_practice/practice_tx_star.html
                                                                    new file:   js_practice/switch_one.js
                                                                    new file:   js_word_problems.html
                                                                    new file:   loops_practice.html
                                                                    new file:   pics/adult-art.jpg
                                                                    new file:   pics/adventure.jpg
                                                                    new file:   pics/afro-beauty.jpg
                                                                    new file:   pics/apple-ipad.jpg
                                                                    new file:   pics/ballerina.jpg
                                                                    new file:   pics/belgian-sheepdog.jpg
                                                                    new file:   pics/google-search.jpg
                                                                    new file:   pics/head.jpg
                                                                    new file:   pics/ipad.jpg
                                                                    new file:   pics/logo.jpg
                                                                    new file:   pics/macbook.jpg
                                                                    new file:   pics/man.jpg
                                                                    new file:   pics/mobile-phone.jpg
                                                                    new file:   pics/pipes.png
                                                                    new file:   pics/security.jpg
                                                                    new file:   pics/seigaiha.png
                                                                    new file:   pics/twitter.png
                                                                    new file:   planets-array-one.html
                                                                    new file:   split-join-one.html
                                                                    new file:   switch_js_one.html
                                                                    new file:   texas.svg
                                                                    new file:   welcomechallenge-styling.png
                                                                    new file:   welcomechallenge.html

                                                                    Megans-MacBook-Pro:cupractice megansimmons$ git commit -m 'lots of images and html practice'git status
                                                                    error: pathspec 'status' did not match any file(s) known to git.
                                                                    Megans-MacBook-Pro:cupractice megansimmons$ pwd
                                                                    /Users/megansimmons/IdeaProjects/cupractice
                                                                    Megans-MacBook-Pro:cupractice megansimmons$ git branch
                                                                    Megans-MacBook-Pro:cupractice megansimmons$ git branch testing-branch
                                                                    fatal: Not a valid object name: 'master'.
                                                                    Megans-MacBook-Pro:cupractice megansimmons$ git branch
                                                                    Megans-MacBook-Pro:cupractice megansimmons$ git push origin master
                                                                    error: src refspec master does not match any.
                                                                    error: failed to push some refs to 'https://github.com/megansimmons/cupractice.git'
                                                                    Megans-MacBook-Pro:cupractice megansimmons$ megansimmons
                                                                    bash: megansimmons: command not found
                                                                    Megans-MacBook-Pro:cupractice megansimmons$ git status
                                                                    On branch master

                                                                    No commits yet

                                                                    Changes to be committed:
                                                                    (use "git rm --cached <file>..." to unstage)

                                                                        new file:   .gitignore
                                                                        new file:   boxes-one.html
                                                                        new file:   bs-grid-one.html
                                                                        new file:   codeup-design-practice.html
                                                                        new file:   css-selector-practice.html
                                                                        new file:   css_practice/boxes-one.css
                                                                        new file:   css_practice/codeup-design-practice.css
                                                                        new file:   css_practice/css-selector-practice.css
                                                                        new file:   css_practice/goodm.css
                                                                        new file:   css_practice/welcomechallenge.css
                                                                        new file:   form_one.html
                                                                        new file:   functions_js_one.html
                                                                        new file:   git-branch-notes.html
                                                                        new file:   good_morning.html
                                                                        new file:   if-else-js-one.html
                                                                        new file:   iterating_one_js.html
                                                                        new file:   js_practice/functions_one.js
                                                                        new file:   js_practice/if-else-one.js
                                                                        new file:   js_practice/iterating_one.js
                                                                        new file:   js_practice/loops_practice.js
                                                                        new file:   js_practice/planets-array-one.js
                                                                        new file:   js_practice/planets-string-one.js
                                                                        new file:   js_practice/practice_tx_star.html
                                                                        new file:   js_practice/switch_one.js
                                                                        new file:   js_word_problems.html
                                                                        new file:   loops_practice.html
                                                                        new file:   pics/adult-art.jpg
                                                                        new file:   pics/adventure.jpg
                                                                        new file:   pics/afro-beauty.jpg
                                                                        new file:   pics/apple-ipad.jpg
                                                                        new file:   pics/ballerina.jpg
                                                                        new file:   pics/belgian-sheepdog.jpg
                                                                        new file:   pics/google-search.jpg
                                                                        new file:   pics/head.jpg
                                                                        new file:   pics/ipad.jpg
                                                                        new file:   pics/logo.jpg
                                                                        new file:   pics/macbook.jpg
                                                                        new file:   pics/man.jpg
                                                                        new file:   pics/mobile-phone.jpg
                                                                        new file:   pics/pipes.png
                                                                        new file:   pics/security.jpg
                                                                        new file:   pics/seigaiha.png
                                                                        new file:   pics/twitter.png
                                                                        new file:   planets-array-one.html
                                                                        new file:   split-join-one.html
                                                                        new file:   switch_js_one.html
                                                                        new file:   texas.svg
                                                                        new file:   welcomechallenge-styling.png
                                                                        new file:   welcomechallenge.html

                                                                        Megans-MacBook-Pro:cupractice megansimmons$ git commit -m 'add images and html practice files'
                                                                        [master (root-commit) a61a790] add images and html practice files
                                                                        49 files changed, 1938 insertions(+)
                                                                        create mode 100644 .gitignore
                                                                        create mode 100644 boxes-one.html
                                                                        create mode 100644 bs-grid-one.html
                                                                        create mode 100644 codeup-design-practice.html
                                                                        create mode 100644 css-selector-practice.html
                                                                        create mode 100644 css_practice/boxes-one.css
                                                                        create mode 100644 css_practice/codeup-design-practice.css
                                                                        create mode 100644 css_practice/css-selector-practice.css
                                                                        create mode 100644 css_practice/goodm.css
                                                                        create mode 100644 css_practice/welcomechallenge.css
                                                                        create mode 100644 form_one.html
                                                                        create mode 100644 functions_js_one.html
                                                                        create mode 100644 git-branch-notes.html
                                                                        create mode 100644 good_morning.html
                                                                        create mode 100644 if-else-js-one.html
                                                                        create mode 100644 iterating_one_js.html
                                                                        create mode 100644 js_practice/functions_one.js
                                                                        create mode 100644 js_practice/if-else-one.js
                                                                        create mode 100644 js_practice/iterating_one.js
                                                                        create mode 100644 js_practice/loops_practice.js
                                                                        create mode 100644 js_practice/planets-array-one.js
                                                                        create mode 100644 js_practice/planets-string-one.js
                                                                        create mode 100644 js_practice/practice_tx_star.html
                                                                        create mode 100644 js_practice/switch_one.js
                                                                        create mode 100644 js_word_problems.html
                                                                        create mode 100644 loops_practice.html
                                                                        create mode 100644 pics/adult-art.jpg
                                                                        create mode 100644 pics/adventure.jpg
                                                                        create mode 100644 pics/afro-beauty.jpg
                                                                        create mode 100644 pics/apple-ipad.jpg
                                                                        create mode 100644 pics/ballerina.jpg
                                                                        create mode 100644 pics/belgian-sheepdog.jpg
                                                                        create mode 100644 pics/google-search.jpg
                                                                        create mode 100644 pics/head.jpg
                                                                        create mode 100644 pics/ipad.jpg
                                                                        create mode 100644 pics/logo.jpg
                                                                        create mode 100644 pics/macbook.jpg
                                                                        create mode 100644 pics/man.jpg
                                                                        create mode 100644 pics/mobile-phone.jpg
                                                                        create mode 100644 pics/pipes.png
                                                                        create mode 100644 pics/security.jpg
                                                                        create mode 100644 pics/seigaiha.png
                                                                        create mode 100644 pics/twitter.png
                                                                        create mode 100644 planets-array-one.html
                                                                        create mode 100644 split-join-one.html
                                                                        create mode 100644 switch_js_one.html
                                                                        create mode 100644 texas.svg
                                                                        create mode 100644 welcomechallenge-styling.png
                                                                        create mode 100644 welcomechallenge.html
                                                                        Megans-MacBook-Pro:cupractice megansimmons$ git push origin master
                                                                        Counting objects: 52, done.
                                                                        Delta compression using up to 4 threads.
                                                                        Compressing objects: 100% (51/51), done.
                                                                        Writing objects: 100% (52/52), 6.71 MiB | 606.00 KiB/s, done.
                                                                        Total 52 (delta 2), reused 0 (delta 0)
                                                                        remote: Resolving deltas: 100% (2/2), done.
                                                                        To https://github.com/megansimmons/cupractice.git
                                                                        * [new branch]      master -> master
                                                                        Megans-MacBook-Pro:cupractice megansimmons$ git status
                                                                        On branch master
                                                                        Your branch is up to date with 'origin/master'.

                                                                        nothing to commit, working tree clean
                                                                        Megans-MacBook-Pro:cupractice megansimmons$ git branch
                                                                        * master
                                                                        Megans-MacBook-Pro:cupractice megansimmons$ git branch testing-branch
                                                                        Megans-MacBook-Pro:cupractice megansimmons$ git branch
                                                                        * master
                                                                        testing-branch
                                                                        Megans-MacBook-Pro:cupractice megansimmons$ git checkout testing-branch
                                                                        Switched to branch 'testing-branch'
                                                                        Megans-MacBook-Pro:cupractice megansimmons$ touch testing-branch.txt
                                                                        Megans-MacBook-Pro:cupractice megansimmons$ ls
                                                                        boxes-one.html                  js_practice
                                                                        bs-grid-one.html                js_word_problems.html
                                                                        codeup-design-practice.html     loops_practice.html
                                                                        css-selector-practice.html      pics
                                                                        css_practice                    planets-array-one.html
                                                                        form_one.html                   split-join-one.html
                                                                        functions_js_one.html           switch_js_one.html
                                                                        git-branch-notes.html           testing-branch.txt
                                                                        good_morning.html               texas.svg
                                                                        if-else-js-one.html             welcomechallenge-styling.png
                                                                        iterating_one_js.html           welcomechallenge.html
                                                                        Megans-MacBook-Pro:cupractice megansimmons$ git branch
                                                                        master
                                                                        * testing-branch
                                                                        Megans-MacBook-Pro:cupractice megansimmons$ git add testing-branch.txt
                                                                        Megans-MacBook-Pro:cupractice megansimmons$ git status
                                                                        On branch testing-branch
                                                                        Changes to be committed:
                                                                        (use "git reset HEAD <file>..." to unstage)

                                                                            new file:   testing-branch.txt

                                                                            Megans-MacBook-Pro:cupractice megansimmons$ git commit -m 'testing-branch.txt some changes'
                                                                            [testing-branch c809fd5] testing-branch.txt some changes
                                                                            1 file changed, 3 insertions(+)
                                                                            create mode 100644 testing-branch.txt
                                                                            Megans-MacBook-Pro:cupractice megansimmons$ git push origin testing-branch
                                                                            Counting objects: 3, done.
                                                                            Delta compression using up to 4 threads.
                                                                            Compressing objects: 100% (3/3), done.
                                                                            Writing objects: 100% (3/3), 412 bytes | 412.00 KiB/s, done.
                                                                            Total 3 (delta 1), reused 0 (delta 0)
                                                                            remote: Resolving deltas: 100% (1/1), completed with 1 local object.
                                                                            remote:
                                                                            remote: Create a pull request for 'testing-branch' on GitHub by visiting:
                                                                            remote:      https://github.com/megansimmons/cupractice/pull/new/testing-branch
                                                                            remote:
                                                                            To https://github.com/megansimmons/cupractice.git
                                                                            * [new branch]      testing-branch -> testing-branch
                                                                            Megans-MacBook-Pro:cupractice megansimmons$ git status
                                                                            On branch testing-branch
                                                                            nothing to commit, working tree clean
                                                                            Megans-MacBook-Pro:cupractice megansimmons$ git branch
                                                                            master
                                                                            * testing-branch
                                                                            Megans-MacBook-Pro:cupractice megansimmons$ git merge testing-branch
                                                                            Already up to date.
                                                                            Megans-MacBook-Pro:cupractice megansimmons$ git checkout master
                                                                            Switched to branch 'master'
                                                                            Your branch is up to date with 'origin/master'.
                                                                            Megans-MacBook-Pro:cupractice megansimmons$ git merge testing-branch
                                                                            Updating a61a790..c809fd5
                                                                            Fast-forward
                                                                            testing-branch.txt | 3 +++
                                                                            1 file changed, 3 insertions(+)
                                                                            create mode 100644 testing-branch.txt
                                                                            Megans-MacBook-Pro:cupractice megansimmons$ git branch
                                                                            * master
                                                                            testing-branch
                                                                            Megans-MacBook-Pro:cupractice megansimmons$ ls
                                                                            boxes-one.html                  js_practice
                                                                            bs-grid-one.html                js_word_problems.html
                                                                            codeup-design-practice.html     loops_practice.html
                                                                            css-selector-practice.html      pics
                                                                            css_practice                    planets-array-one.html
                                                                            form_one.html                   split-join-one.html
                                                                            functions_js_one.html           switch_js_one.html
                                                                            git-branch-notes.html           testing-branch.txt
                                                                            good_morning.html               texas.svg
                                                                            if-else-js-one.html             welcomechallenge-styling.png
                                                                            iterating_one_js.html           welcomechallenge.html
                                                                            Megans-MacBook-Pro:cupractice megansimmons$ git branch -D testing-branch
                                                                            Deleted branch testing-branch (was c809fd5).
                                                                            Megans-MacBook-Pro:cupractice megansimmons$ git branch
                                                                            * master
                                                                            Megans-MacBook-Pro:cupractice megansimmons$ 
