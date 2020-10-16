# Urano

Urano is a CLI program to create twitch chat bots with simplicity.

# Install

To install Urano run this command:

`npm install -g uranotwitch`

# Usage

## Create a new bot

To create a new twitch bot, first, create a directory. This directory will have all your twitch chatbot code.

```
mkdir MyBot
cd MyBot
```

And now, you can run the command to create a new bot

`urano -c`

or

`urano --create`

And the Urano will ask about the bot username, password (token) and the bot twitch channel.

```
$ urano --create
What is the bot username?: MyBot
Paste the bot token here: my-token
What is the channel of the bot?: myTwitchChannel
```

Now, you can run `npm install` to install all depencies of your twitch chatbot.

## Adding a command

To add a new command, run:

`urano -a`

or

`urano --add`

And now, Urano will ask you the type of command.

```
$ urano --add
[1] Simple Command
[0] CANCEL

What type of command do you want? [1/0]:
```

### Simple Command

Simple Command is a command what will ever return the same text, replying or not the user what called the command.

Urano will ask about the command, the result of the command and if the command will reply or not the user what called the command.

```
[1] Simple Command
[0] CANCEL

What type of command do you want? [1/0]: 1
What is the command? (without !): mycommand
What is the result of the mycommand?: this is my command
Reply the user in the mycommand message? [y/n]: y
```

## Runing the your bot

Now, you can run the bot using `npm run serve` or `node index.js`, and now, your bot is working!
