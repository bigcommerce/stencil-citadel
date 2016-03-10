# Renderer for rendering sass file contents as examples

Hologram::CodeExampleRenderer::Factory.define('sass_file') do
  example_template 'sass_file_template'

  rendered_example do |code|
    no_endline_file = IO.read(code.gsub(/\n/, '')).split("\n")
    no_endline_file = no_endline_file.reject {|line| line =~ /^\/\// || line == ''}
    no_endline_file.join("\n")
  end
end
