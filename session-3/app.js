function tweet() {
    // 1. read what a user inserted in the textarea
    let tweetMessageElement = document.getElementById('tweetMessage');

    // 2. save that to a variable 
    let tweetMessage = tweetMessageElement.value;

    if(tweetMessage.length == 0) {
        document.getElementById('errorMessage').innerText = "You cannot tweet an empty message.";
        document.getElementById('errorMessage').classList.remove('hidden');
        document.getElementById('tweetButton').classList.remove('bg-blue-500')
        document.getElementById('tweetButton').classList.add('bg-blue-100')
        document.getElementById('tweetButton').classList.add('cursor-disable')
        return;
    }

    if(tweetMessage.length > 140) {
        document.getElementById('errorMessage').innerText = "You cannot write more than 140 chars.";
        document.getElementById('errorMessage').classList.remove('hidden');
        document.getElementById('tweetButton').classList.remove('bg-blue-500')
        document.getElementById('tweetButton').classList.add('bg-blue-100')
        document.getElementById('tweetButton').classList.add('cursor-disable')
        return ;
    }

    document.getElementById('errorMessage').classList.add('hidden');

    // 3. Add the content of that varialbe to the page as a card
    let newTweet = document.createElement('p');
    newTweet.classList = "p-4 border rounded mb-4";
    newTweet.innerText = tweetMessage;
    document.getElementById('allTweets').appendChild(newTweet);

    // 4. Empty the textarea 
    tweetMessageElement.value = "";
}