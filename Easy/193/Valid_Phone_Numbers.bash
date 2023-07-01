# Read from the file file.txt and output all valid phone numbers to stdout.
# Common syntax explained:

# ^ Start of a line (not just within a line, ex 112-122-2313 not 022121-112-2313)
# [0-9] regex expression to represent any digit between 0 and 9.
# \d any digit (Perl-flavoured regular expression) Note the compiler uses GNU/Linux so to use \d use the -P tag
# {3} repeated exactly 3 times, {4} repeated 4 times ect, hence [0-9]{3} means three numbers from 0-9.
# $ end of a line
# | or expression
# () used to group expressions
# \( or\) used for literal parentheses
grep -e "^[0-9]\{3\}\-[0-9]\{3\}\-[0-9]\{4\}$" -e "^([0-9]\{3\}) [0-9]\{3\}\-[0-9]\{4\}$" file.txt