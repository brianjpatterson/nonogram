# nonogram
Coding Challenge: nonogram

A nonogram is also known as Paint by Numbers and Japanese Crossword. The aim in this puzzle is to color the grid into black and white squares. At the top of each column, and at the side of each row, there are sets of one or more numbers which describe the runs of black squares in that row/column in exact order. For example, if you see 10 1 along some column/row, this indicates that there will be a run of exactly ten black squares, followed by one or more white squares, followed by a single black square. The cells along the edges of the grid can also be white.

You are given a square nonogram of size size. Its grid is given as a square matrix nonogramField of size (size + 1) / 2 + size, where the first (size + 1) / 2 cells of each row and and each column define the numbers for the corresponding row/column, and the rest size × size cells define the the grid itself.

Determine if the given nonogram has been solved correctly.
