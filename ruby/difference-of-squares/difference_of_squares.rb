class Squares
  def initialize(numbers)
    @number = numbers
  end

  def square_of_sum
    (@number + 1).times.inject(0) { |sum, number| sum + number }**2
  end

  def sum_of_squares
    (@number + 1).times.inject(0) { |sum, number| sum + number**2 }
  end

  def difference
    square_of_sum - sum_of_squares
  end
end

module BookKeeping
  VERSION = 4 # Where the version number matches the one in the test.
end
