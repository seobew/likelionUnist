class User < ActiveRecord::Base
  before_create :confirmation_token
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable, :confirmable
  validates :name, presence: true, length: { maximum: 20 }
  VALID_EMAIL_REGEX = /\A[\w+\-.]+@unist.ac.kr+\z/i
  validates :email, presence: true, length: { maximum:50 },
            format: { with: VALID_EMAIL_REGEX }

end
