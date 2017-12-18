class Raindrops
  SOUNDS = { 3 => 'Pling', 5 => 'Plang', 7 => 'Plong' }
  def self.convert(number)
    str = SOUNDS.each_with_object('') do |hash, string|
      string << hash[1] if (number % hash[0]).zero?
    end

    str.empty? ? number.to_s : str
  end
end

module
     BookKeeping
  VERSION = 3 # Where the version number matches the one in the test.
end
