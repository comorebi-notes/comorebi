require 'rails_helper'

describe WorkDecorator do
  let(:work) { Work.new.extend WorkDecorator }
  subject { work }
  it { should be_a Work }
end
