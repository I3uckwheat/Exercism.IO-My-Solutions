class Complement
  def self.of_dna(dna)
    complements = dna.each_char.map do |letter|
      case letter
      when 'C'
        'G'
      when 'G'
        'C'
      when 'T'
        'A'
      when 'A'
        'U'
      else
        break
      end
    end
    complements.nil? ? '' : complements.join
  end
end

module BookKeeping
  VERSION = 4 # Where the version number matches the one in the test.
end
