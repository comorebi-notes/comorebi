module ApplicationHelper
  def human_work_status(work_status)
    case work_status
    when "draft"     then "下書き"
    when "published" then "公開中"
    when "deleted"   then "削除済み"
    end
  end

  def select_for_work_children(model_array)
    model_array.map do |model|
      [model[:title], model[:id]]
    end
  end
end
