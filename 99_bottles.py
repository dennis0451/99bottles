


def bottle_song():
	bottles_On_Wall = "bottles of beer on the wall"
	bottle_On_Wall = "bottle of beer on the wall"
	take_And_Pass = "Take one down and pass it around"
	new_Bottle_Count = 99


	while new_Bottle_Count > 1:
		if new_Bottle_Count > 2:
			print(f"{new_Bottle_Count} {bottles_On_Wall}, {new_Bottle_Count} bottles of beer.\n {take_And_Pass}, {new_Bottle_Count -1} {bottles_On_Wall}. ")
			new_Bottle_Count = new_Bottle_Count -  1
		else:
			print(f"{new_Bottle_Count} {bottles_On_Wall}, {new_Bottle_Count} bottles of beer.\n {take_And_Pass}, {new_Bottle_Count-1} {bottle_On_Wall}.")
			new_Bottle_Count = new_Bottle_Count -  1
	print(f"{new_Bottle_Count} {bottle_On_Wall}, {new_Bottle_Count} bottle of beer.\n {take_And_Pass}, no more {bottles_On_Wall}.")
	print(f"No more {bottles_On_Wall}, no more bottles of beer.")
	print(f"Go to the store and buy some more, 99 {bottles_On_Wall}.")
bottle_song()
