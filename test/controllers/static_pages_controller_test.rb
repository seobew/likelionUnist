require 'test_helper'

class StaticPagesControllerTest < ActionController::TestCase
  test "should get home" do
    get :home
    assert_response :success
  end

  test "should get about" do
    get :about
    assert_response :success
  end

  test "should get service" do
    get :service
    assert_response :success
  end

  test "should get member" do
    get :member
    assert_response :success
  end

  test "should get qna" do
    get :qna
    assert_response :success
  end

end
