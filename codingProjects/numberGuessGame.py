#import arrr
import numpy as np
from pyscript import document

"""
def translate_english(event):
    input_text = document.querySelector("#english")
    english = input_text.value
    output_div = document.querySelector("#output")
    output_div.innerText = arrr.translate(english)
"""
randInt = np.random.randint(1,10)
guesses = 0
def printout(event):
    global guesses
    guesses += 1
    input_text =document.querySelector("#inputVal")
    val = input_text.value
    output_div = document.querySelector("#output")
    print(randInt)
    try:
        input_val = int(val)
    except ValueError:
        output_div.innerText = "Please enter a valid number"
    if input_val==randInt:
        output_div.innerText = "You've guessed correctly the answer was in fact, "+ str(input_val) + " and in only "+ str(guesses) + " guesses!"
    elif input_val!= randInt:
        output_div.innerText="NO. You've guessed "+ str(guesses) + " times"