---
layout: post
title: XOR-LSTM; Bits Parity
feature-img: "assets/img/sample_feature_img.png"
tags: [LSTM, OpenAI]
---
This is a part of OpenAI Request to Research 2.0 warmup problems. I thought this is good to work on this problem in my leisure time. I came to know about this "Request to Research" thing while going through OpenAI SpinningUP RL(it worth a read for someone interested in Reinforcement Learning). <br>
<br>
Task:<br>
Train an <a href="http://colah.github.io/posts/2015-08-Understanding-LSTMs/">LSTM</a> to solve the XOR problem: that is, given a sequence of bits, determine its parity. The LSTM should consume the sequence, one bit at a time, and then output the correct answer at the sequence’s end. Test the two approaches below:<br>

  * Generate a dataset of random 100,000 binary strings of length 50. Train the LSTM; what performance do you get?
  * Generate a dataset of random 100,000 binary strings, where the length of each string is independently and randomly chosen between 1 and 50. Train the LSTM. Does it succeed? What explains the difference?
### Experiments and Results:
Experimental details: I have used keras. For most of my experiments, I have used LSTM with 10 hidden states and final dense layer with 2 outputs. <br>

**Mark 1** Dataset of random 100,000 binary strings of length 50 is generated. Trained it over the LSTM model with batch size 64 for 100 epochs, but the model learned nothing. I ran the experiment multiple times, but the result remains the same. Here is the [link](https://github.com/adityauser/XOR-LSTM/blob/master/Parity/XOR-LSTM(FixedLenght-50).ipynb) of code.<br>

**Mark 2** Dataset of random 100,000 binary strings, where the length of each sequence is randomly chosen between 1 and 50 is generated. Trained it over the LSTM model with batch size 64 for 10 epochs, and most of the time model got accuracy over 0.98 in 3 iterations (Each batch was trained for 3 epochs). Since for the same batch, LSTM can’t handle the sequence of different length so, based on sequence length batches were made(Each batch was trained 3 epochs). The thing here to notice is the number of epochs required for convergence depends upon in which order batches were fitted to the model, if the batch with least sequence length is fitted first, then it takes less number of epochs than fitting the batches randomly or batch with highest sequence length is fitted first. Go through the [code](https://github.com/adityauser/XOR-LSTM/blob/master/Parity/XOR-LSTM(Variable%20Size).ipynb) for more details.<br>

**Mark 3** Dataset of random 100,000 binary strings of length 6 is generated. Trained it over the LSTM model with batch size 64 for 100 epochs, and usually model gets accuracy 1 in 35 epochs. I ran the experiment multiple times(at least 10). Here is the [link](https://github.com/adityauser/XOR-LSTM/blob/master/Parity/XOR-LSTM(FixedLenght-6)%20.ipynb) of code.<br>

**Mark 4** Dataset of random 100,000 binary strings, where the length of each sequence is randomly chosen between 1 and 50. What if rather than fitting random sequence of random size, we fit sequence with constant length by using Padding. Two possible ways a) Front/Pre Padding(Sequence are padded with 0s at the start of the original sequence) and b) Rear/Post Padding(Sequence are padded with 0s at the end of the original sequence).
* Front/Pre Pad the sequence with 0s shows results similar to training the sequence of random length, or even better. [Link](https://github.com/adityauser/XOR-LSTM/blob/master/Parity/XOR-LSTM(PrePadding).ipynb) to the code.
* Rear/Post Pad the sequence with 0s shows results similar to training the sequence of fixed length(lenght 6), usually it get accuraccy over 0.90 in 48 epoches. [Link](https://github.com/adityauser/XOR-LSTM/blob/master/Parity/XOR-LSTM(PostPadding)%20.ipynb) to the code


**Mark 5** Some random noise of order 1e-3 is added to each element of the sequences and then sequences are trained on the model. For Fixed length(lenght=50) sequences the result remains the same as for variable length sequences with prepadding, but for variable length sequences with postpadding model was not learning anything. [Link](https://github.com/adityauser/XOR-LSTM/blob/master/Parity/XOR-LSTM(Randomness)%20.ipynb) to the code.

**Mark 6** Front/Pre Pad the sequence with 0s and then reversing it. Using both sequences for training(now the model takes two sequences) doesn't help the model, the results were worse than as for Pre padded sequence but better than as for Post padded sequence. [Link](https://github.com/adityauser/XOR-LSTM/blob/master/Parity/XOR-LSTM(Double%20Sequence).ipynb) to the code.

**Mark 7** Now, the sequence has 2s as well with 0s, and 1s and output is the sum of sequence modulus 3. For both of the cases(random length string and fixed length string), the result was the same as obtained for binary strings. — Now final dense layer has 3 outputs. [Link](https://github.com/adityauser/XOR-LSTM/blob/master/Parity/XOR-LSTM(Non-Binary).ipynb) to the code.

### Conclusion:
I don't want to conclude anything I don't want to corrupt your original thoughts; it is up to you how you take the above results and use them in your deep learning model. But you look at <a href="https://www.reddit.com/r/MachineLearning/comments/81uvmp/d_had_fun_with_openais_lstm_parity_prediction/">this</a> Reddit thread.


### TD;LR

#### Result:


Proprosed way of Training  | Total Epochs  | Avg. No. of Epochs(Accuraccy>0.90) | Accuraccy
------------- | ------------- | ------------- | -------------
Fixed Lenght(50)  | 200  | Not Converging  | 0.5 +-1e-3
Random Length(Random Batch Training)   | 10 iterations  | 9(3 iterations * 3 epochs)  | 1
Random Length(Acend. Batch Training)  | 10 iterations  | 6(2 iterations * 3 epochs)  | 1
Random Length(Decend. Batch Training)  | 10 iterations | 27(9 iterations * 3 epochs)  | 1
Fixed Lenght(6)  | 100  | 35  | 1
Random Length(Front-Padded)  | 10  | 5  | 1
Random Length(Rear-Padded)  | 100  | 48  | 0.97
Fixed Lenght(Noise)  | 100  | Not Converging  | 0.5 +-1e-3
Random Length(Front-Padded)(Noise)  | 10  | 5  | 0.99
Random Length(Rear-Padded)(Noise)  | 100  | Not Converging  | 0.5
Two Sequences(Original+Reverced)  | 100  | 25  | 0.99
Fixed Lenght(50)(ternary sequence)  | 100  | Not Converging  | 0.5 +-1e-3
Random Length(Front-Padded)(ternary sequence)  | 50 | 18  | 0.96
Random Length(Rear-Padded)(ternary sequence)  | 50 | Not Converging  | 0.5 +-1e-3






