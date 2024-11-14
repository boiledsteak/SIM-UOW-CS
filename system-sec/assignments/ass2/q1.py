import matplotlib.pyplot as plt

m = 1
k = 6

power = pow(2, k)
hashes = []
counter = []
expected_hash = m * pow(2, k) + 1

def recursive_sum(depth, current_sum, target, power):
    if depth == 0:
        return 1 if current_sum == target else 0
    
    count = 0
    for i in range(1, power + 1):
        count += recursive_sum(depth - 1, current_sum + i, target, power)
    return count

for x in range(1, expected_hash):
    count = recursive_sum(m, 0, x, power)
    hashes.append(count)
    counter.append(x)
    print("Hash " + str(x) + "\t\t" + str(count) + " combi")

plt.bar(counter, hashes, width=1)
plt.xlabel('Hash count')
plt.ylabel('Combinations count')
plt.xticks(counter)
plt.show()