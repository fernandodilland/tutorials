# Arrays: move zeros to the left

def move_zeros(Value): #Function to move
    if len(Value) < 1:
        return

    lengthA = len(Value)
    write_index = lengthA - 1
    read_index = lengthA - 1

    while(read_index >= 0):
        if Value[read_index] != 0:
            Value[write_index] = Value[read_index]
            write_index -= 1

        read_index -= 1

    while(write_index >= 0):
        Value[write_index] = 0;
        write_index -= 1

OriginalArray = [1, 10, 20, 0, 59, 63, 0, 88, 0]
print("Original array:", OriginalArray)

move_zeros(OriginalArray)

print("New array (with zeros to the left): ", OriginalArray)